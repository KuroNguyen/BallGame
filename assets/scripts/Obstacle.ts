
import { _decorator, Component, Node, UITransform, Size } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Obstacle
 * DateTime = Fri Oct 22 2021 10:48:19 GMT+0700 (Indochina Time)
 * Author = kuronguyen
 * FileBasename = Obstacle.ts
 * FileBasenameNoExtension = Obstacle
 * URL = db://assets/scripts/Obstacle.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Obstacle')
export class Obstacle extends Component {

    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property
    length;
    @property
    velocity = 10;
    

    start () {
        this.setObstacleSize();
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    setObstacleSize () {
        let uiTransform = this.node.getComponent(UITransform);
        uiTransform.setContentSize(new Size(this.length, 30));
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/en/scripting/life-cycle-callbacks.html
 */
