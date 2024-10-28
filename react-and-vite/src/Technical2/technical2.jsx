import Card from 'react-bootstrap/Card';
import Backdrop from '../photos/Background for Monico Grad Prix.png';
import Foreground from '../photos/Forground for Monico Grad Prix.png';
import Telemetry from '../photos/Oracle Cloud Telemetry Data Checo.png';
import Practice from '../photos/Oracle in practice.png';
import Strategy from '../photos/Oracle Strategy Guide.png';
import Virtual from '../photos/Oracle virtual lap in Monza.png';
import Gradient from '../photos/Gradient.png';
import {useCallback, useEffect, useState} from "react";

export default function Technical2() {
    const [y, setY] = useState(window.scrollY)
    const [carImageTop, setCarImageTop] = useState(68.5);
    const [gradientImageTop, setGradientImageTop] = useState(888);
    const [direction, setDirection] = useState("DOWN");

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                setDirection("DOWN")
            } else if (y < window.scrollY) {
                setDirection("UP");
            }
            setY(window.scrollY);
        },[y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    useEffect(() => {
        if (y < 180 && y > 80 && carImageTop >= 68.5 && carImageTop <= 200) {
            if (direction === "UP") {
                setCarImageTop(y)
                setGradientImageTop(carImageTop + 888)
            } else {
                setCarImageTop(y)
                setGradientImageTop(carImageTop + 888)
            }
        }
    }, [y])


    return (
        <div>
            <Card style={{
                position: 'absolute',
                top: 68.5,
                left: 0
            }}>
                <Card.Img variant="top" src={Backdrop}/>
            </Card>
            <h1
                style={{
                    position: 'absolute',
                    top: 175,
                    left: 150,
                    fontSize: 150
                }}>
                Monaco
            </h1>
            <h1
                style={{
                    position: 'absolute',
                    top: 290,
                    left: 150,
                    fontSize: 150
                }}>
                Grand Prix
            </h1>
            <Card style={{
                position: 'absolute',
                top: carImageTop,
                left: 0
            }}>
                <Card.Img variant="top" src={Foreground}/>
            </Card>
            <Card
                style={{
                    position: 'absolute',
                    top: gradientImageTop,
                    left: 0,
                }}>
                <Card.Img width={1440} height={150} src={Gradient}/>
            </Card>
            <Card style={{
                position: 'absolute',
                top: 3000,
                left: 0
            }}>
                <Card.Img variant="top" src={Practice}/>
            </Card>
            <a href={"/technical2"}>
                <Card style={{
                    position: 'absolute',
                    top: 3450,
                    left: 680
                }}>
                    <Card.Img variant="top" src={Telemetry}/>
                </Card>
            </a>
            <a href={"/technical2"}>
                <Card style={{
                    position: 'absolute',
                    top: 3450,
                    left: 350
                }}>
                    <Card.Img variant="top" src={Strategy}/>
                </Card>
            </a>
            <a href={"/technical2"}>
                <Card style={{
                    position: 'absolute',
                    top: 3450,
                    left: 20
                }}>
                    <Card.Img variant="top" src={Virtual}/>
                </Card>
            </a>
            <h1
                style={{
                    position: 'absolute',
                    top: 3000,
                    left: 70,
                    fontSize: 70
                }}>
                Oracle In Practice
            </h1>
            <h1
                style={{
                    position: 'absolute',
                    top: 3780,
                    left: 40,
                    fontSize: 20
                }}>
                Oracle Virtual Lap In Monza
            </h1>
            <h1
                style={{
                    position: 'absolute',
                    top: 3780,
                    left: 370,
                    fontSize: 20
                }}>
                Oracle Stategy Guide
            </h1>
            <h1
                style={{
                    position: 'absolute',
                    top: 3750,
                    left: 700,
                    fontSize: 20
                }}>
                Oracle Cloud Telemetry Data
            </h1>
            <h1
                style={{
                    position: 'absolute',
                    top: 3780,
                    left: 700,
                    fontSize: 20
                }}>
                Checo
            </h1>
        </div>
    )
}