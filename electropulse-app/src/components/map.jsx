import React from "react";
const Map = () => {
    return (
        <div className="map-container-left">
            <iframe
                width="450"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap-canvas"
                src="https://maps.google.com/maps?width=1100&amp;height=600&amp;hl=en&amp;q=Garden%20City%20Nairobi+(Nairobi)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

            </iframe>
        </div>)
}
export default Map;