import React, { useState } from 'react'

const Toasts = () => {
    return (
        <div>
            <Center title={data.title} desc={data.desc} />
            <Right title={data.title} desc={data.desc} />
            <Left title={data.title} desc={data.desc} />
            <CenterBottom title={data.title} desc={data.desc} />
            <LeftBottom title={data.title} desc={data.desc} />
            <RightBottom title={data.title} desc={data.desc} />
        </div>
    )
}

export default Toasts

const Center = ({ title, desc }) => {
    const [count, setCount] = useState(false);
    if (!count) {
        return (
            <div className='toast center'>

                <div className={"card animate__animated animate__fadeInDown "}
                    onDoubleClick={() => setCount(true)}
                >
                    <h5 className="title">{title}</h5>
                    <p>{desc.slice(0, 100)}</p>
                </div>

            </div>
        )
    }

}

const Left = ({ title, desc }) => {
    const [count, setCount] = useState(false);
    if (!count) {
        return (
            <div className='toast top-l'>
                <div className="card animate__animated animate__fadeInLeft"
                    onDoubleClick={() => setCount(true)}
                >
                    <h5 className="title">{title}</h5>
                    <p>{desc.slice(0, 100)}</p>
                </div>

            </div>
        )
    }
}
const Right = ({ title, desc }) => {
    const [count, setCount] = useState(false);
    if (!count) {
        return (
            <div className='toast top-r'>
                <div className="card animate__animated animate__fadeInRight"
                    onDoubleClick={() => setCount(true)}
                >
                    <h5 className="title">{title}</h5>
                    <p>{desc.slice(0, 100)}</p>
                </div>

            </div>
        )
    }
}


const CenterBottom = ({ title, desc }) => {
    const [count, setCount] = useState(false);
    if (!count) {
        return (
            <div className='toast bottom-c'>

                <div className="card animate__animated animate__fadeInUp"
                    onDoubleClick={() => setCount(true)}
                >
                    <h5 className="title">{title}</h5>
                    <p>{desc.slice(0, 100)}</p>
                </div>

            </div>
        )
    }
}

const LeftBottom = ({ title, desc }) => {
    const [count, setCount] = useState(false);
    if (!count) {
        return (
            <div className='toast bottom-l'>
                <div className="card animate__animated animate__fadeInLeft"
                    onDoubleClick={() => setCount(true)}
                >
                    <h5 className="title">{title}</h5>
                    <p>{desc.slice(0, 100)}</p>
                </div>

            </div>
        )
    }
}
const RightBottom = ({ title, desc }) => {
    const [count, setCount] = useState(false);
    if (!count) {
        return (
            <div className='toast bottom-r'>
                <div className="card animate__animated animate__fadeInRight"
                    onDoubleClick={() => setCount(true)}
                >
                    <h5 className="title">{title}</h5>
                    <p>{desc.slice(0, 100)}</p>
                </div>

            </div>
        )
    }
}
const data = {
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, atque."
}