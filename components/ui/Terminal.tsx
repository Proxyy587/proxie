// components/Terminal.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";

const COMMANDS: { [key: string]: string } = {
  help: `+--------------------------+
|    Supported Commands     |
+--------------------------+
| about      - About Me       |
| experience - My Experience  |
| education  - My Education   |
| skills     - My Skills      |
| contact    - Contact Info   |
| party      - Party Time!    |
| fortune    - Get a Fortune  |
| motd       - Message of Day |
| matrix     - Enter Matrix   |
| cowsay     - Cow Says       |
| uptime     - System Uptime  |
| whoami     - Who Am I       |
| date       - Current Date   |
| weather    - Weather Info   |
| clear      - Clear Terminal |
+--------------------------+`,
  about:
    "Hello 👋\nI'm a web developer with a passion for building impactful projects.",
  skills:
    "Languages: HTML, CSS, JavaScript, TypeScript\nFrameworks: React, Next.js, TailwindCSS",
  education: "B.Sc. in Computer Science",
  experience: "Currently working as a front-end developer.",
  contact: "You can contact me on GitHub or Twitter.",
  party: "🎉🎉🎉",
  fortune: "You will have a great day filled with code and coffee!",
  motd: "Message of the Day: Stay positive, work hard, make it happen!",
  matrix: "Follow the white rabbit...\nLoading the Matrix...",
  cowsay:
    " ________________\n< Moo! I'm a cow! >\n ----------------\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||",
  uptime: "System has been up for 3 days, 4 hours, and 23 minutes.",
  whoami: "guest",
  date: `Today's date is ${new Date().toLocaleDateString()} and the time is ${new Date().toLocaleTimeString()}.`,
  weather: "The current weather is sunny with a temperature of 25°C.",
  clear: "Clearing the terminal...",
};

const ASCII_ART = `  __ _           _        _ _       
 / _| |         | |      (_) |      
| |_| | __ _ ___| |_ __ _ _| |_ ___ 
|  _| |/ _\` / __| __/ _\` | | __/ _ \\
| | | | (_| \\__ \\ || (_| | | ||  __/
|_| |_|\\__,_|___/\\__\\__,_|_|\\__\\___|
`;

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const terminalWindowRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (command: string) => {
    if (command === "party") {
      startTheParty();
    } else if (command === "clear") {
      setHistory([]);
    } else if (COMMANDS[command]) {
      setHistory((prev) => [...prev, `➜ ~ ${command}`, COMMANDS[command]]);
    } else {
      setHistory((prev) => [
        ...prev,
        `➜ ~ ${command}`,
        `Command not found: ${command}`,
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input.trim().toLowerCase());
    setInput("");
  };

  useEffect(() => {
    inputRef.current?.focus();
    setHistory([ASCII_ART, "Type 'help' to see the list of commands."]);
  }, []);

  useEffect(() => {
    if (terminalWindowRef.current) {
      terminalWindowRef.current.scrollTop =
        terminalWindowRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="text-white font-mono rounded-lg shadow overflow-hidden">
      <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-lg">
        <div className="bg-red-500 w-3 h-3 rounded-full mr-2"></div>
        <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
        <div className="bg-green-500 w-3 h-3 rounded-full"></div>
        <div className="ml-auto text-gray-400">guest@twan: ~</div>
      </div>
      <div
        ref={terminalWindowRef}
        className="bg-gray-900 p-4 flex flex-col overflow-auto h-96"
      >
        {history.map((line, index) => (
          <div
            key={index}
            className={`mb-1 ${index === 0 ? "animate-ascii-art" : ""}`}
          >
            {index === 0 ? (
              <pre className="whitespace-pre-wrap">{line}</pre>
            ) : (
              line
            )}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex">
          <span className="text-green-500 mr-2">➜</span>
          <span className="text-blue-500 mr-2">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-gray-900 border-none outline-none text-white flex-grow flex-1"
          />
        </form>
      </div>
    </div>
  );
};

const startTheParty = () => {
  // Implement your party function here
};

export default Terminal;
