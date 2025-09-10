import birds from "../asset/birds.mp4";
import {forwardRef} from "react";

export const Video = forwardRef(function Video(props, ref) {
    return (
        <div width="150" height="100">
            <video width="50%" ref={ref}>
                <source src={birds} type="video/mp4" width="250"/>
            </video>
        </div>
    );
});