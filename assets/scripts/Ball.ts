
import { _decorator, Component, Node, Vec3, Graphics, EventKeyboard, KeyCode, UITransform, systemEvent, SystemEvent } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Ball
 * DateTime = Fri Oct 22 2021 09:53:01 GMT+0700 (Indochina Time)
 * Author = kuronguyen
 * FileBasename = Ball.ts
 * FileBasenameNoExtension = Ball
 * URL = db://assets/scripts/Ball.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Ball')
export class Ball extends Component {
    
    @property
    velocity = 0

    @property
    width = 30

    gameWidth = 150

    start () {

        // Listen to event keyboard
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown (event: EventKeyboard) {
        switch(event.keyCode) {
            case KeyCode.ARROW_LEFT:
                this.velocity = -1800;
                console.log(this.node.position.x);  
                break;
            case KeyCode.ARROW_RIGHT:
                this.velocity = 1800;
                console.log(this.node.position.x);   
                break;
        }
    }

    update (deltaTime: number) {
        
        if (this.velocity > 0 &&
            this.node.position.x  < this.gameWidth ) {
                this.node.position = new Vec3(this.node.position.x + this.velocity*deltaTime, 
                    this.node.position.y,0)
            }
        if (this.velocity < 0 &&
            this.node.position.x > -this.gameWidth) {
                this.node.position = new Vec3(this.node.position.x + this.velocity*deltaTime, 
                    this.node.position.y,0)
            }
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
