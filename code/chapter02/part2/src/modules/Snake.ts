class Snake {
    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollectionOf<HTMLElement>;
    // 获取蛇的容器
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')!;
        this.bodies = this.element.getElementsByTagName('div');
    }
    // 获取蛇的坐标
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }
    // 设置蛇的坐标
    set X(value: number) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (this.X === value) return;
        // 超出范围，抛出错误
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了");
        }
        // 修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不可向右移动，反之亦然
        if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }

        // 移动身体
        this.moveBody();
        this.head.style.left = value + 'px';

        this.checkHeadBody();
    }

    set Y(value: number) {
        // 如果新值和旧值相同，则直接返回不再修改
        if (this.Y === value) return;
        // 超出范围，抛出错误
        if (value < 0 || value > 290) {
            throw new Error("蛇撞墙了");
        }
        // 修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不可向右移动，反之亦然
        if (this.bodies[1] && this.bodies[1].offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }

        // 移动身体
        this.moveBody();
        this.head.style.top = value + 'px';

        this.checkHeadBody();
    }

    // 蛇增加身体的方法
    addBody() {
        // 向element中添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // 蛇身体移动的方法
    moveBody() {
        // 将后边的身体设置为前边身体的位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = this.bodies[i - 1].offsetLeft;
            let Y = this.bodies[i - 1].offsetTop;

            // 将值设置再当前身体上
            this.bodies[i].style.left = X + 'px';
            this.bodies[i].style.top = Y + 'px';
        }
    }

    // 检查蛇是否撞到自己
    checkHeadBody(){
        for(let i = 1;i < this.bodies.length; i++){
            if(this.X === this.bodies[i].offsetLeft && this.Y === this.bodies[i].offsetTop){
                throw new Error("撞到自己了！");
            }
        }
    }
}

export default Snake