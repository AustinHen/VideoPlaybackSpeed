
function setup()
{
    const settings = {
        playback_speed: 1,
        step_size: 0.1,
        force_update: true,
        update_rate: 1,
    };

    //Adds event listener
    document.addEventListener('keydown', function (e) {
        if(e.key == 's') update_video_speed(settings, settings.playback_speed + settings.step_size);
        if(e.key == 'd') update_video_speed(settings, settings.playback_speed - settings.step_size);
        if(e.key == 'a') update_video_speed(settings, 1);
        if(e.key == 'x') update_video_speed(settings, 1);
    });
}

function update_video_speed(settings, speed)
{
    settings.playback_speed = speed;
    document.querySelector('video').playbackRate = settings.playback_speed;
}

function draw_tool(){

}

setup();
