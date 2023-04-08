var gameState = "wait"
var bgimg, splashscreen, playbutton, howbutton
var playimg, level1img, playerimg,cherry,cherry1,cherryimg,cherry2
var score1=0
var platform1_l2,platform2_l2,platform3_l2,platform4_l2



function preload() {

    bgimg = loadImage("assets/splashscreenimg.png")
    level1img = loadImage("assets/wallpaper2.jpg")
    level2img = loadImage("assets/level2backgroud.png")

    platform1img = loadImage("assets/platform1.png")
    platform2img = loadImage("assets/platform2.png")
    platform3img = loadImage("assets/platform3.png")
    // playerimg = loadImage("assets/pacman.png")
    cherryimg=loadImage("assets/cherry.png")
    pacmanimg=loadAnimation("/assets/pacman1.png","/assets/pacman2.png","/assets/pacman3.png")
    popUpImg=loadImage("assets/cloud.jpg")


    // 8aprilcodes

    // level 2 
    platform1img2 = loadImage("/assets/level2platform1.png")
    platform2img2 = loadImage("/assets/level2platform2.png")
    platform3img2 = loadImage("/assets/level2platform3.png")
    platform4img2 = loadImage("/assets/level2platform4.png")



}


function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/playbutton.png")
    playbutton.position(width / 2 - 250, height - 145)
    playbutton.size(180, 145)
    playbutton.hide()


    soundbutton = createImg("/assets/soundbutton.png")
    soundbutton.position(width / 2 + 45, height - 150)
    soundbutton.size(170, 160)
    soundbutton.hide()


    mutebutton = createImg("assets/mutebutton.png")
    mutebutton.position(width / 2 + 70, height - 150)
    mutebutton.size(165, 150)
    mutebutton.hide()


    level1popbutton=createImg("assets/cloud.jpg")
    level1popbutton.position(width/7,height/100)
    level1popbutton.size(1000,500)
    level1popbutton.hide()


    invisibleground=createSprite(width/2,height-50,width,10)
    invisibleground.visible=false
   
    leftwall=createSprite(width/2-width/4,height/2,10,height)
    leftwall.visible=false
   
    rightwall=createSprite(width-width/4,height/2,10,height)
    rightwall.visible=false


    player = createSprite(50, height - 100)
    player.addAnimation("walk",pacmanimg)
    player.scale = 1
    player.visible = false
    player.debug=true
    player.setCollider("circle",0,20,40)



//level1
    platform1 = createSprite(width / 4, height - 120)
    platform1.addImage(platform1img)
    platform1.scale = 0.5
    platform1.setCollider("rectangle",-50,0,platform1.width/2+50,platform1.height/2)
    platform1.visible=false



    platform2 = createSprite(200, height / 2)
    platform2.addImage(platform2img)
    platform2.scale = 0.5
    platform2.setCollider("rectangle",-50,0,platform2.width/2+50,platform2.height/2)

    platform2.visible=false


    platform3 = createSprite(width / 2, height / 4)
    platform3.addImage(platform3img)
    platform3.scale = 0.5
    platform3.setCollider("rectangle",-50,0,platform3.width/2+50,platform3.height/2)

    platform3.visible=false


    platform4 = createSprite(width-400, height / 2)
    platform4.addImage(platform2img)
    platform4.setCollider("rectangle",-50,0,platform4.width/2+50,platform4.height/2)

    platform4.scale = 0.5
    platform4.visible=false

    // collectible in level 1
    // april 2 april new codes
    
    cherry=createSprite(platform2.x-20,platform2.y-(platform2.height/5.7))
    cherry.addImage(cherryimg)
    cherry.scale=0.5
    cherry.visible=false

    cherry1=createSprite(platform3.x-20,platform3.y-(platform3.height/5.5))
    cherry1.addImage(cherryimg)
    cherry1.scale=0.5
    cherry1.visible=false

    
    cherry2=createSprite(platform4.x-20,platform4.y-(platform4.height/5.7))
    cherry2.addImage(cherryimg)
    cherry2.scale=0.5
    cherry2.visible=false


    cherryscore=createSprite(width-width/6,50)
    cherryscore.addImage(cherryimg)
    cherryscore.scale=0.5
    cherryscore.visible=false


    level1endwall=createSprite(width-10,height-100,20,height/2)
    level1endwall.visible=false



    // level 2 - 8 april
    
    platform1_l2 = createSprite(50, height - 120)
    platform1_l2.addImage(platform1img2)
    platform1_l2.scale = 0.5
    platform1_l2.setCollider("rectangle",-50,0,platform1.width/2+50,platform1.height/2)
    // platform1_l2.velocityX=5
    platform1_l2.visible=false



    platform2_l2 = createSprite(200, height / 2)
    platform2_l2.addImage(platform2img2)
    platform2_l2.scale = 0.5
    platform2_l2.setCollider("rectangle",-50,0,platform2.width/2+50,platform2.height/2)

    platform2_l2.visible=false


    platform3_l2 = createSprite(width / 2, height / 4)
    platform3_l2.addImage(platform3img2)
    platform3_l2.scale = 0.5
    platform3_l2.setCollider("rectangle",-50,0,platform3.width/2+50,platform3.height/2)

    platform3_l2.visible=false


    platform4_l2 = createSprite(width-400, height / 2)
    platform4_l2.addImage(platform4img2)
    platform4_l2.setCollider("rectangle",-50,0,platform4.width/2+50,platform4.height/2)

    platform4_l2.scale = 0.5
    platform4_l2.visible=false





    leftwall2=createSprite(50,height/2,10,height)
    leftwall2.visible=false
   
    rightwall2=createSprite(width-50,height/2,10,height)
    rightwall2.visible=false



}


function draw() {

    if (gameState === "wait") {

        background(bgimg)
        playbutton.show()
        soundbutton.show()

    }


    playbutton.mousePressed(() => {
        gameState = "play"
        playbutton.hide()
        soundbutton.show()

    })


    if (gameState === "play") {
        background(level1img)
        soundbutton.position(0, 0)
        mutebutton.position(0, 0)
        level1popbutton.show()

        playbutton.hide()
    }

    soundbutton.mousePressed(() => {
        soundbutton.hide()
        mutebutton.show()
    })
    mutebutton.mousePressed(() => {
        soundbutton.show()
        mutebutton.hide()
    })

    level1popbutton.mousePressed(() => {
        gameState = "level1"
        image(level1img,0,0,width,height)
    })


    if (gameState === "level1") {
        // new code --april 2
        cherry.visible=true
        cherry1.visible=true
        cherry2.visible=true
        cherryscore.visible=true


        // image(level1img,0,0,width,height)
        level1popbutton.hide()
        PLAYLEVEL1()
        if(platform1.isTouching(leftwall)){
            platform1.velocityX=5
        }
        
        else if(platform1.isTouching(rightwall)){
            platform1.velocityX=-10
        }

        player.velocityY += 0.8
player.collide(invisibleground)

    }
    if(gameState=="level2"){
        background(level2img)
       
       platform1.visible=false
       platform2.visible=false
       platform3.visible=false
       platform4.visible=false
    
    
    //    arpil8
       platform1_l2.visible=true
       platform2_l2.visible=true
       platform3_l2.visible=true
       platform4_l2.visible=true

       leftwall2.visible=true
       rightwall2.visible=true

    //    platform1_l2.velocityX=5

       if(platform1_l2.isTouching(leftwall2)){
        platform1_l2.velocityX=2
    }
    
    else if(platform1_l2.isTouching(rightwall2)){
        platform1_l2.velocityX=-2
    }

    
    
    }
    

    drawSprites()


if (gameState==="level1"){
    
// player movement... added 2 april

textSize(60)
fill("red")
stroke(0)
strokeWeight(2)
text(": "+score1,cherryscore.x+(cherryscore.width/4),70)

if (keyIsDown(RIGHT_ARROW)) {
    player.x += 5

 }

if (keyIsDown(LEFT_ARROW)) {
    player.x -= 5

}

if (keyDown("space")) {
    player.velocityY = -15
}


if (player.isTouching(platform1)){
    player.velocityX=0
    player.velocityY=0
}


if (player.isTouching(platform2)){
    player.velocityX=0
    player.velocityY=0
}


if (player.isTouching(platform3)){
    player.velocityX=0
    player.velocityY=0
}


if (player.isTouching(platform4)){
    player.velocityX=0
    player.velocityY=0
}

if (player.isTouching(cherry)||player.isTouching(cherry1)||player.isTouching(cherry2)){



if (player.isTouching(cherry)){
    cherry.remove()
    score1 +=10
}
if (player.isTouching(cherry1)){
    cherry1.remove()
    score1 +=10
}
if (player.isTouching(cherry2)){
    cherry2.remove()
    score1 +=10
}

}

}



if (score1==30){
    platform1.x=width-100
    platform1.velocityX=0

    if(player.isTouching(level1endwall)){
        level1over()
    }
}





}



function PLAYLEVEL1() {
    image(level1img,0,0,width,height)
    player.visible = true

    platform1.visible=true
    platform2.visible=true
    platform3.visible=true
    platform4.visible=true
   



}


function Level2(){
    gameState="level2"
    player.x=50
    player.y=100
}

function level1over(){
    swal({
        title: "COMPLETED LEVEL 1 !! ",
        text: "READY FOR THE NEXT CHALLENGE",
        imageUrl: "assets/pacman.png",
        imageSize: '200x200',
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'LEVEL 2',
    },
        function () {
Level2()       })

}










