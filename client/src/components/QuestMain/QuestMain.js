import "./QuestMain.css";
import React from "react";

const QuestMain = props => 
    <div className="quest_main">
        <main className="container-fluid center">
            <div className="row">
                <div className="col m12">
                    <div className="questions center">
                        <div className="card-content white-text">
                            <span className="card-title center">
                                <h3>{props.cur_quest}</h3>
                            </span>
                        </div>
                        <br />
                        <br />

          <div className="container questGrid center">
          {
              props.cur_ans.map(ans => (
					<figure className="effect-ruby" onClick={props.nextQuest}>
						<img src="https://burst.shopifycdn.com/photos/pouring-hot-coffee_373x@2x.progressive.jpg" alt="img13"/>
						<figcaption>
							<h2>{ans}</h2>
							<p>etc etc/p>
						</figcaption>			
					</figure>
                ))}
			/div>
                    </div>
                </div>
            </div>
        </main>
    </div>

export default QuestMain;