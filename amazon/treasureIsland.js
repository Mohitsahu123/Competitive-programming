(function main() {

    const grid = [['O', 'O', 'O', 'O'],
                 ['D', 'O', 'D', 'O'],
                 ['O', 'O', 'O', 'O'],
                 ['X', 'D', 'D', 'O']];

    const isSafe = (x, y, width, height) => { return x >= 0 && x <= width && y >= 0 && y <= height && grid[x][y] !== 'D'; };

    const [dx, dy] = [[0, 1, 0, -1], [1, 0, -1, 0]];

    const [startX, startY, endX, endY] = [0, 0, grid[0].length - 1, grid.length - 1];
    
    const minStep = () => {
        let node = {
            x: startX,
            y: startY,
            val: 'O',
            step: 0,
        };

        let queue = [node];

        while(queue.length) {

            let cur = queue.shift();
                        
            if(cur.val === 'X') {
                return cur.step;
            }
            for(let i = 0; i < dx.length; i++) {
                let [nextX, nextY] = [cur.x + dx[i], cur.y + dy[i]];
                if(!isSafe(nextX, nextY, endX, endY)) continue;
                let next = {
                    x: nextX,
                    y: nextY,
                    val: grid[nextX][nextY],
                    step: cur.step + 1,
                }
                grid[nextX][nextY] = 'D';
                queue.push(next);
            }
        }
        return -1;
    };
    let min = minStep();
    console.log(min);
    return min;
}());