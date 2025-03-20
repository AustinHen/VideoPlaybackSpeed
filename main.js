//javascript:fetch("https://raw.githubusercontent.com/AustinHen/VideoPlaybackSpeed/main/main.js").then(a=>a.text()).then(eval)

function setup()
{
    const settings = {
        playback_speed: 1,
        step_size: 0.1,
        force_update: true,
        update_delay: 0.01,
    };

    //Adds event listener
    document.addEventListener('keydown', function (e) {
        if(e.key == 's') update_video_speed(settings, settings.playback_speed + settings.step_size);
        if(e.key == 'd') update_video_speed(settings, settings.playback_speed - settings.step_size);
        if(e.key == 'a') update_video_speed(settings, 1);
        if(e.key == 'x') draw_tool(settings);
    });
}

function update_video_speed(settings, speed)
{
    console.log("update speed to: " + speed);
    settings.playback_speed = speed;

    let update = () => document.querySelectorAll('video').forEach(video => {video.playbackRate = settings.playback_speed;});
    if(settings.force_update){
        clearInterval();
        setInterval(update, settings.update_delay);
    }else{
        update();
    }

    //updates text for draw tool
    document.querySelectorAll("playbackspeedAsh").forEach(text => text.innerHtml = " " + settings.playback_speed);
}

function draw_tool(settings)
{
    let to_add = document.createElement("div");
    to_add.innerHtml = `
            <div> 
                <div class="playbackspeedAsh"></div>
            </div>
        `;
    document.body.appendChild(to_add);
}

setup();
