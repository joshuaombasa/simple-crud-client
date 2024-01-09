import React from "react";

export default function Home() {
    return (
        <div className="home-page">
            <h3>Welcome to doIT - Your Ultimate Task Management Companion!</h3>
            <p>Unleash the power of productivity with our intuitive and feature-packed Todo app. </p>
            <p>Designed to simplify your life and keep you organized, doIT is the perfect tool to help you manage your tasks effortlessly.</p>
            <div className="features">
                <h3>Features:</h3>
                <ul>
                    <li>
                        <strong>Easy Task Creation:</strong>
                        <p>Quickly add, edit, and prioritize tasks with just a few taps. Our user-friendly interface ensures a seamless task management experience.</p>
                    </li>
                    <li>
                        <strong>Smart Reminders:</strong>
                        <p>Never miss a deadline again! Set reminders for important tasks and receive timely notifications to keep you on track.</p>
                    </li>
                    <li>
                        <strong>Organize with Tags and Categories:</strong>
                        <p>Categorize your tasks using tags and categories, making it easy to find and focus on specific areas of your life or work.</p>
                    </li>
                    <li>
                        <strong>Collaborate with Others:</strong>
                        <p>Boost your team's productivity by collaborating on tasks. Share to-do lists, assign tasks, and track progress together.</p>
                    </li>
                    <li>
                        <strong>Intelligent Prioritization:</strong>
                        <p>Our intelligent prioritization system helps you identify and focus on high-priority tasks, ensuring you make the most of your time.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}