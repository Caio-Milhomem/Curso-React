import { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        //if (hours > 12) hours -= 12; // Convert 24-hour format to 12-hour format
        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${meridiem}`;
    }
    function formatDate() {
        const day = padZero(time.getDate());
        const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        const dayNames = [
            "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
            "Quinta-feira", "Sexta-feira", "Sábado"
        ];
        const dayOfWeek = dayNames[time.getDay()];
        const month = monthNames[time.getMonth()];
        const year = time.getFullYear();

        return `${dayOfWeek}, ${day} de ${month} de ${year}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
            <div className="date">
                <span>{formatDate()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;
