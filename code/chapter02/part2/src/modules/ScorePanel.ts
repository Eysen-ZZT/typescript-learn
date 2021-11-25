// 定义表示记分牌的类
class ScorePanel{
    // score 和 level 用来的记录分数和等级
    score = 0;
    level = 1;
    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;

    // 设置一个变量限制等级
    maxLevel: number;
    // 设置一个变量表示多少分时升级
    upScore: number;
    
    constructor(maxLevel: number = 10,upScore: number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 记分的方法
    addScore(){
        // 分数自增
        this.scoreEle.innerHTML = ++this.score + "";
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
    }

    // 提升等级
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel