/* eslint-disable @next/next/no-img-element */
import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';

function ColorImage({ color = [] }, ref) {
    const [colorSelect, setColorSelect] = useState('');

    // const handleClick = (e,name) => {
    //     console.log(`  ~ e,name`, e,name)
        
    // }
    const handleClick = (e, name) => {
        setColorSelect(name);
        const element = document.getElementsByClassName('image-item');
        Array.from(element).map((item) => item.classList.remove('active'));
        e.target.parentElement.classList.add('active');
    };

    useImperativeHandle(ref, () => ({
        getColor: () => colorSelect,
    }));

    return (
        <div className="color-image flex-column align-items-start">
            <h6 className="product-title product-title-2 d-block w-100 ">
                Color
            </h6>

            <div className="image-select">
                <div className="size-box">
                    <ul className="image-section m-0">
                        {color.map(
                            ({ image, name }, index) => (
                                <li
                                    key={index}
                                    className="border rounded image-item"
                                    role="button"
                                    onClick={(e) =>
                                        handleClick(e, name)
                                    }
                                >
                                    <img
                                        src={image.src}
                                        className="img-fluid lazyload"
                                        alt={image.alt}
                                    />
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(ColorImage);
