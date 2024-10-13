import React from "react";
import {
  Conversation,
  ConversationList,
  Avatar,
  TypingIndicator,
  Message,
  MessageList,
  MessageSeparator,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";
import { Search, ShoppingBag } from "lucide-react";
import { EmptyPage } from "@/components/emptyPage";
import { InputComponent } from "@/components/input";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { Status } from "./status";
export function ChatPage() {
  return (
    <div className="flex space-x-3 h-[78vh]">
      <ConversationListContainer />
      <EmptyPage
        image={"/messageImage.png"}
        title={"Pas de message"}
        subTitle={"Cliquer sur un contact pour consulter le messages..."}
        button={"Nouveau Message"}
      />
    </div>
  );
}

export function ConversationListContainer() {
  return (
    <div>
      <div className="bg-white w-full h-full rounded-md shadow-md px-4 pt-3 overflow-hidden">
        <h1 className="text-lg font-semibold mb-2">Contacts</h1>
        <div className="mb-5">
          <InputComponent
            placeholder={"Rechercher"}
            icon={<Search size={22} />}
          />
        </div>

        <ConversationList className="rounded-md h-full">
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
            lastSenderName="Emily"
            name="Emily"
          ></Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Emily"
            name="Emily"
          ></Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Emily"
            name="Emily"
          ></Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Emily"
            name="Emily"
          ></Conversation>
          <Conversation
            info="Yes i can do it for you"
            lastSenderName="Emily"
            name="Emily"
          ></Conversation>
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
        </ConversationList>
      </div>
    </div>
  );
}

export function MessagesContainer() {
  const messages = [
    {
      type: "separator",
      props: {
        content: "Saturday, 30 November 2019",
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "single",
        },
        children: <Avatar src={"/Image.png"} name="Eliot" />,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "single",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "first",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "normal",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "normal",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "last",
        },
        children: <Avatar src={"/Image.png"} name="Eliot" />,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "first",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "normal",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Zoe",
          direction: "outgoing",
          position: "normal",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "outgoing",
          position: "last",
        },
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "first",
        },
        avatarSpacer: true,
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "last",
        },
        children: <Avatar src={"/Image.png"} name="Eliot" />,
      },
    },
    {
      type: "separator",
      props: {
        content: "Saturday, 31 November 2019",
      },
    },
    {
      props: {
        model: {
          message: "Hello my friend",
          sentTime: "15 mins ago",
          sender: "Eliot",
          direction: "incoming",
          position: "single",
        },
        children: <Avatar src={"/Image.png"} name="Eliot" />,
      },
    },
  ];
  return (
    <div className="bg-white w-full h-full rounded-md shadow-md overflow-hidden">
      {/*<ConversationHeader>
        <ConversationHeader.Back />
        <Avatar
          name="Emily"
          src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
        />
        <ConversationHeader.Content
          info="Active 10 mins ago"
          userName="Emily"
        />
        <ConversationHeader.Actions>
          <StarButton title="Add to favourites" />
          <VoiceCallButton title="Start voice call" />
          <VideoCallButton title="Start video call" />
          <InfoButton title="Show info" />
        </ConversationHeader.Actions>
      </ConversationHeader>*/}
      <MessagesHeader />

      <MessageList
        style={{ height: "450px" }}
        typingIndicator={false && <TypingIndicator content="Eliot is typing" />}
      >
        {messages.map((m, i) =>
          m.type === "separator" ? (
            <MessageSeparator key={i} {...m.props} />
          ) : (
            <Message key={i} {...m.props} />
          )
        )}
      </MessageList>
      <div className="py-2">
        <MessageInput autoFocus placeholder="Type message here..." />
      </div>
    </div>
  );
}

export const MessagesHeader = () => {
  return (
    <div className="bg-white border-b text-sm text-gray-400 border-b-gray-100 flex  justify-between py-2 px-2">
      <div className="flex space-x-3">
        <Avatar
          name="Emily"
          src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
        />
        <div className="flex flex-col">
          <h1 className="font-semibold text-gray-700">Jane Doe</h1>
          <span className="flex space-x-1">
            <h1>Online</h1>
            <h1 className="text-blue-300">12:00</h1>
          </span>
        </div>
      </div>
      <div className="flex space-x-2 justify-center items-center">
        <Status status={"Nouveau Client"} />
        <div>
          <h1 className="text-blue-400">Voir le profile</h1>
          <span className="flex space-x-1">
            <ShoppingBag size={18} />
            <h1>0 Commandes</h1>
          </span>
        </div>
      </div>
    </div>
  );
};
