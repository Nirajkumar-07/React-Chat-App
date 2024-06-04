import React from "react";
import { ChatEngine, ChatFeed, ChatList } from "react-chat-engine";
import "./App.css";
import { LoginForm } from "./components/LoginForm";

export const App = () => {
  if (!localStorage.getItem("Username")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="92db7255-5c6d-4ade-88d8-3dd3b482d8b6"
      userName={localStorage.getItem("Username")}
      userSecret={localStorage.getItem("Password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
