
import { _decorator, Component, Node, Prefab, instantiate, v2, Vec3, v3, EventKeyboard, macro, systemEvent, SystemEvent, SystemEventType, KeyCode, UITransform } from 'cc';
import { Obstacle } from './Obstacle';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Game
 * DateTime = Fri Oct 22 2021 10:55:34 GMT+0700 (Indochina Time)
 * Author = kuronguyen
 * FileBasename = Game.ts
 * FileBasenameNoExtension = Game
 * URL = db://assets/scripts/Game.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('Game')
export class Game extends Component {
   
    @property
    gameWidth = 150

    @property
    gameHeight = 600

    @property(Prefab)
    wallPrefab: Prefab = null;

    @property(Node)
    ball: Node

    @property
    gameVelocity = 1000

    @property(Node)
    score: {
        default: 0,
        displayName: "Score",
        tooltip: "The score of player"
    }

    start () {
        console.log("New game");
        // this.spawnNewObstacle();

        setInterval(() => this.spawnNewObstacle(), 300);

        // this.spawnNewObstacle();
    }

    onLoad () {
        // Generate a new obstacle
        this.ball.setPosition(0,-200,0)
    }

    spawnNewObstacle () {
        console.log("new obstacle");
        
        // // Generate a new node in the scene with a preset template
        // let newObstacle = instantiate(this.wallPrefab);
        // // Set properties for newObstacle
        // newObstacle.getComponent(Obstacle).length = 500;
        // // Put the newly added node under the Canvas node
        // this.node.addChild(newObstacle);
        // // Set up random position for the obstacle
        // newObstacle.setPosition(this.getNewWallPosition());

        let newObstacle = this.getStairObstacle();

        console.log(newObstacle.position);
        
        

        this.node.addChild(newObstacle);
    }

    getNewWallPosition () {
        let xPosition = (Math.random() - 0.5)*this.gameWidth;
        let yPosition = this.gameHeight/2 + 100; // locate on the top of screen with 100 offset
        return v3(xPosition,yPosition,0);
    }

    /**
     * Create a node of small obstacle that will appear in the horizal 
     * middle of the screen which is not located to the edge of screen0
     */
    getSmallObstacle () {
        // Generate a new node in the scene with a preset template
        let newObstacle = instantiate(this.wallPrefab);

        // Set length properties of the obstacle to 30
        newObstacle.getComponent(Obstacle).length = 30;
        
        // Set the position of the obstacle
        newObstacle.setPosition(this.getNewWallPosition());

        return newObstacle;
    }

    /**
     * Create a node of obstacle that stick to the wall and has a random width
     */
    getStairObstacle () {
        // Generate a new node in the scene with a preset template
        let newObstacle = instantiate(this.wallPrefab);

        // Set length with random value from 0 to 3/4 * gameWidth
        let obstacleWidth = Math.random() * (200 - 100) + 100;
        newObstacle.getComponent(Obstacle).length = obstacleWidth
      
        // This part will define left or right wall that this node will be stuck
        let yPosition = this.gameHeight/2 + 100;
        let xPosition;
        if (Math.random() <= 0.5) { // stick to left wall
            newObstacle.getComponent(UITransform).anchorX = 0
            xPosition = -150;
        } else { // stick to right wall
            // xPosition = this.gameWidth/2 - newObstacle.getComponent(Obstacle).length/2;
            newObstacle.getComponent(UITransform).anchorX = 1
            xPosition = 150
        }
        console.log(`xPosition: ${xPosition}`);
        
        newObstacle.setPosition(v3(xPosition, yPosition, 0));

        return newObstacle;
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
