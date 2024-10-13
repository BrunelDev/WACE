import React from "react";

export default function ChatPage() {
  return <div></div>;
}

export function ConversationListContainer() {
  return (
    <ConversationList
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
      >
        <Avatar
          name="Emily"
          src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
        />
      </Conversation>
      <Conversation
        info="Yes i can do it for you"
        lastSenderName="Kai"
        name="Kai"
      >
        <Avatar
          name="Kai"
          src="https://chatscope.io/storybook/react/assets/kai-5wHRJGb2.svg"
        />
      </Conversation>
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
  );
}
