import React from "react";
import {
  Conversation,
  ConversationList,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import { InputComponent } from "@/components/input";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
export function ChatPage() {
  return (
    <div>
      <ConversationListContainer />
    </div>
  );
}

export function ConversationListContainer() {
  return (
    <div>
      <div className="bg-white w-[20%] h-[75vh] rounded-md shadow-md">
        <InputComponent placeholder={"Rechercher"} />
        <ConversationList
          className="rounded-md"
          style={{
            height: "340px",
          }}
        >
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Lilly"
            name="Lilly"
          >
            <Avatar
              name="Lilly"
              src="https://chatscope.io/storybook/react/assets/lilly-aj6lnGPk.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Joe"
            name="Joe"
          >
            <Avatar
              name="Joe"
              src="https://chatscope.io/storybook/react/assets/joe-v8Vy3KOS.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Emily"
            name="Emily"
          ></Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Kai"
            name="Kai"
          ></Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Akane"
            name="Akane"
          >
            <Avatar
              name="Akane"
              src="https://chatscope.io/storybook/react/assets/akane-MXhWvx63.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Eliot"
            name="Eliot"
          >
            <Avatar
              name="Eliot"
              src="https://chatscope.io/storybook/react/assets/eliot-JNkqSAth.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Zoe"
            name="Zoe"
          >
            <Avatar
              name="Zoe"
              src="https://chatscope.io/storybook/react/assets/zoe-E7ZdmXF0.svg"
            />
          </Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Patrik"
            name="Patrik"
          >
            <Avatar
              name="Patrik"
              src="https://chatscope.io/storybook/react/assets/patrik-yC7svbAR.svg"
            />
          </Conversation>
        </ConversationList>
      </div>
    </div>
  );
}
