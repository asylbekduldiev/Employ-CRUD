import React from 'react';
import data from './data.json';  
import { Data } from './interfaces';

import styled from 'styled-components'

import '../Workouts/Workouts.css'

const appData: Data = data as Data;

const Workouts: React.FC = () => {
    return (
        <div>
            <h1>{appData.title}</h1>
            {appData.goals.map(goal => (
                <div key={goal.id}>
                    <div className="rhombus step4"></div>
                    <h2>{goal.title}</h2>
                    <p>{goal.description}</p>
                    <p>Status: {goal.status}</p>
                    <p>Due Date: {new Date(goal.dueDate).toLocaleDateString()}</p>
                    <h3>Tasks:</h3>
                    <ul>
                        {goal.mindTask && (
                            <li>
                                <strong>Mind Task:</strong> {goal.mindTask.title} - Score: {goal.mindTask.score}
                            </li>
                        )}
                        {goal.soulTask && (
                            <li>
                                <strong>Soul Task:</strong> {goal.soulTask.title} - Score: {goal.soulTask.score}
                            </li>
                        )}
                        {goal.bodyTask && (
                            <li>
                                <strong>Body Task:</strong> {goal.bodyTask.title} - Score: {goal.bodyTask.score}
                            </li>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Workouts;
