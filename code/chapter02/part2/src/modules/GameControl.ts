import Snake from "./Snake";
import Food from "./Foods";
import ScorePanel from "./ScorePanel";

// 游戏控制器
class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    // 创建一个属性，来存储蛇的移动方向（也就是按键的方向）
    direction: string = '';

    // 创建一个属性记录游戏是否结束
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
    }
    // 游戏的初始化方法，调用后游戏及开始
    init() {
        // 绑定键盘按键按下的事件, 由于this指向问题需要更改当前this指向GameControl类
        document.addEventListener('keydown', this.keyDownHandle.bind(this));

        // 调用run方法，使蛇移动
        this.run();
    }

    // 键盘按下事件回调
    keyDownHandle(event: KeyboardEvent) {
        // 需检查event.key的值是否合法（用户是否按了正确的按键）
        console.log(event)
        // 修改direction 属性
        this.direction = event.key;
    }

    // 创建一个蛇移动的方法
    run() {
        /**
         * 根据方向（this.direction）来使蛇的位置改变
         * 向上 top 减少
         * 向下 top 增加
         * 向左 left 减少
         * 向右 left 增加
         */
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根据按键的方法来修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
            case "up":
                Y -= 10
                break;
            case "ArrowDown":
            case "Down":
                Y += 10
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10
                break;
            case "ArrowRight":
            case "Right":
                X += 10
                break;
        }

        // 检测蛇是否吃到了食物
        this.checkEat(X, Y);

        try {
            // 修改蛇的位置
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (err) {
            // 捕获到异常，游戏结束，提示结束信息
            alert((err as any).message + 'GAME OVER!');
            // 将isLive设置为false 终止定时器
            this.isLive = false;
        }

        // 开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }
    // 检测蛇吃到食物的方法
    checkEat(X: Number, Y: Number) {
        if(this.food.X === X && this.food.Y === Y){
            console.log("蛇吃到食物了");
            // 食物位置重置
            this.food.change();
            // 分数增加
            this.scorePanel.addScore();
            // 蛇身体增加一节
            this.snake.addBody();
        }
    }
}

export default GameControl