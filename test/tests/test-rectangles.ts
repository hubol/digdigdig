import { areRectanglesOverlapping, IRectangle } from "../../src/lib/math/rectangle";
import { Assert } from "../lib/assert";

export function testRectangle() {
    const bounds: IRectangle = { x: 0, y: 0, width: 10, height: 10 };

    const holeRectangles: IRectangle[] = [
        { x: -5, y: -5, width: 10, height: 10 },
        { x: 5, y: -5, width: 10, height: 10 },
        { x: -5, y: 5, width: 10, height: 10 },
        { x: 5, y: 5, width: 10, height: 10 },
    ];

    const availableArea = bounds.width * bounds.height;

    // Deranged implementation inspired by this article
    // https://www.construct.net/en/tutorials/calculating-rectangular-862

    // Find hole rectangles that overlap with this
    // and reduce them only to their overlap
    const overlappingRectangles = holeRectangles
        .filter(rect => areRectanglesOverlapping(rect, bounds))
        .map(rect => {
            const x0 = Math.max(rect.x, bounds.x);
            const y0 = Math.max(rect.y, bounds.y);
            const x1 = Math.min(rect.x + rect.width, bounds.x + bounds.width);
            const y1 = Math.min(rect.y + rect.height, bounds.y + bounds.height);

            return {
                x0,
                y0,
                x1,
                y1,
            };
        });

    const xCoords = [...new Set(overlappingRectangles.flatMap(rect => [rect.x0, rect.x1]))].sort((a, b) => a - b);
    const yCoords = [...new Set(overlappingRectangles.flatMap(rect => [rect.y0, rect.y1]))].sort((a, b) => a - b);

    const usedCells: boolean[][] = [];

    for (const rectangle of overlappingRectangles) {
        const xIndex0 = xCoords.indexOf(rectangle.x0);
        const yIndex0 = yCoords.indexOf(rectangle.y0);
        const xIndex1 = xCoords.indexOf(rectangle.x1);
        const yIndex1 = yCoords.indexOf(rectangle.y1);

        for (let x = xIndex0; x < xIndex1; x++) {
            for (let y = yIndex0; y < yIndex1; y++) {
                if (!usedCells[x]) {
                    usedCells[x] = [];
                }
                usedCells[x][y] = true;
            }
        }
    }

    let coverageArea = 0;

    for (let i = 0; i < xCoords.length - 1; i++) {
        if (!usedCells[i]) {
            continue;
        }

        const width = xCoords[i + 1] - xCoords[i];
        for (let j = 0; j < yCoords.length - 1; j++) {
            if (usedCells[i][j]) {
                const height = yCoords[j + 1] - yCoords[j];
                coverageArea += width * height;
            }
        }
    }

    Assert(coverageArea).toStrictlyBe(availableArea);
}
