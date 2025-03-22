//javascript:fetch("https://raw.githubusercontent.com/AustinHen/VideoPlaybackSpeed/main/main.js").then(a=>a.text()).then(eval)

function setup()
{
    if(document.querySelector('#ashVideoSpeed') != null) return; //already have one running

    const settings = {
        playback_speed: 1,
        step_size: 0.1,
        force_update: true,
        update_delay: 0.01,
    };

    draw_tool();
    let tracked=false;
    let rel_pos = {x:0, y:0};
    const tool = document.getElementById("ashVideoSpeed");
    tool.addEventListener('mousedown', (e) => {
        tracked = true;

        const tool_pos = tool.getBoundingClientRect();
        rel_pos.x = tool_pos.left - e.clientX;
        rel_pos.y = tool_pos.top - e.clientY;
    });

    tool.addEventListener('mouseup', () => {
        tracked = false;
    });

    document.addEventListener('mousemove', function (e) {
        if(!tracked) return;

        tool.style.left = rel_pos.x + e.clientX + "px";
        tool.style.top = rel_pos.y + e.clientY + "px";
    });

    //Adds event listener
    document.addEventListener('keydown', function (e) {
        if(e.key == 's') update_video_speed(settings, settings.playback_speed + settings.step_size);
        if(e.key == 'd') update_video_speed(settings, settings.playback_speed - settings.step_size);
        if(e.key == 'a') update_video_speed(settings, 1);
        if(e.key == 'x') toggle_tool_vis();
    });
}

function update_video_speed(settings, speed)
{
    if(speed <= 0) speed = .1;
    console.log("update speed to: " + speed);
    settings.playback_speed = speed;

    let update = () => document.querySelectorAll('video').forEach(video => {video.playbackRate = settings.playback_speed;});
    if(settings.force_update){
        clearInterval();
        setInterval(update, settings.update_delay);
    }else{
        update();
    }
    update_tool_text(speed);
}

function draw_tool()
{
    let data = `
        <p id="ashVideoSpeed" style="
            position:absolute;
            background-color:white;
            padding: 5px;
            top:0px;
            left:0px;
            margin: 0;
            border-radius:5px;
            text-align:center;
            z-index: 9;
        ">
        1.0x
        <p>
    `; 
    const parser = new DOMParser();
    const content = parser.parseFromString(data , 'text/html').querySelector("#ashVideoSpeed");

    let first_vid = document.querySelector('video');
    if(first_vid != null){
        first_vid.appendChild(content);
    }else{
        document.body. insertAdjacentHTML(content);

    }
}

function toggle_tool_vis()
{
    const tool = document.querySelector('#ashVideoSpeed');
    if(tool.style.display === 'none'){
        tool.style.display = 'block';
    }else{
        tool.style.display = 'none';
    }
}

function update_tool_text(new_speed)
{
    document.querySelector('#ashVideoSpeed').innerHTML = new_speed.toFixed(1) + "x";
}


setup();
