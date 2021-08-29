import "./Foreground.css";
import facebook from "./Images/icon-facebook.svg";
import instagram from "./Images/icon-instagram.svg";
import pinterest from "./Images/icon-pinterest.svg";
import React,{useState,useEffect} from "react";

function Foreground() {
	const [[day,hrs,min,sec],setTime]=useState([8,23,55,41]);
	useEffect(() => {
		const interval = setInterval(() => {
			if(sec>0)
			{
				setTime([day,hrs,min,sec-1]);
			}
			else {
				if(min>0)
				{
					setTime([day,hrs,min-1,59]);
				}
				else
				{
					if(hrs>0)
					{
						setTime([day,hrs-1,59,59]);
					}
					else
					{
						if(day>0)
						{
							setTime([day-1,23,59,59]);
						}
						else
						{
							setTime([0,0,0,0]);
						}
					}
				}
			}
		},1000);
		return () => clearInterval(interval);
	});
	return <div className="Foreground">
		<div><pre>W E ' R E  L A U N C H I N G  S O O N</pre></div>
		<div className="time">
			<div className="time-inner">
				<div className="card">{("0"+day).slice(-2)}</div>
				D A Y S
			</div>
			<div className="time-inner">
				<div className="card">{("0"+hrs).slice(-2)}</div>
				H O U R S
			</div>
			<div className="time-inner">
				<div className="card">{("0"+min).slice(-2)}</div>
				M I N U T E S
			</div>
			<div className="time-inner">
				<div className="card">{("0"+sec).slice(-2)}</div>
				S E C O N D S
			</div>
		</div>
		<div className="links">
			<img className="link" src={facebook} alt="facebook" />
			<img className="link" src={pinterest} alt="pinterest" />
			<img className="link" src={instagram} alt="instagram" />
		</div>
	</div>
}
	
export default Foreground;