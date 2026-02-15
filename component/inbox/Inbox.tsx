"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Paperclip, 
  SendHorizontal, 
  MoreVertical, 
  ArrowLeft 
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const chatList = [
  { id: 1, name: "RAkib", message: "Thanks you for reaching", time: "Just now", active: true },
  { id: 2, name: "Hasib", message: "Thanks you for reaching", time: "Just now", active: false },
  { id: 3, name: "Arif", message: "Thanks you for reaching", time: "Just now", active: false },
  { id: 4, name: "Jamyio", message: "Thanks you for reaching", time: "Just now", active: false },
  { id: 5, name: "Tokriol", message: "Thanks you for reaching", time: "Just now", active: false },
  { id: 6, name: "Hasif", message: "Thanks you for reaching", time: "Just now", active: false },
];

const messages = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur. Enim non sit varius in volutpat amet nisl. Faucibus lacus elit faucibus tempus scelerisque. Sagittis at orci rutrum lorem arcu at massa. Ac sed accumsan ipsum ornare blandit. Facilisi lacus lorem sodales diam.",
    sender: "me",
    time: "10:45 AM",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur. Enim non sit varius in volutpat amet nisl. Faucibus lacus elit faucibus tempus scelerisque. Sagittis",
    sender: "them",
    time: "10:45 AM",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur. Enim non sit varius in volutpat amet nisl. Faucibus lacus elit faucibus tempus scelerisque. Sagittis at orci rutrum lorem arcu at massa. Ac sed accumsan ipsum ornare blandit. Facilisi lacus lorem sodales diam.",
    sender: "me",
    time: "10:45 AM",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur. Enim non sit varius in volutpat amet nisl. Faucibus lacus elit faucibus tempus scelerisque. Sagittis",
    sender: "them",
    time: "10:45 AM",
  },
];

export default function InboxPage() {
  const [inputValue, setInputValue] = useState("");
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <div className="w-full h-[calc(100vh-90px)] bg-white overflow-hidden flex justify-center">
      <div className="w-full max-w-7xl flex h-full">
        
        {/* --- Left Sidebar: Chat List --- */}
        {/* Hidden on mobile if a chat is selected */}
        <div className={`w-full md:w-80 border-r flex-col h-full ${selectedChat ? "hidden md:flex" : "flex"}`}>
          <div className="p-6">
            <h1 className="text-xl font-bold text-center text-gray-700">Messages</h1>
            <div className="h-[1px] bg-gray-200 mt-4 w-full"></div>
          </div>

          <ScrollArea className="flex-1">
            <div className="space-y-1">
              {chatList.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`flex items-center gap-3 px-6 py-4 cursor-pointer transition ${
                    selectedChat === chat.id || (chat.active && !selectedChat) ? "bg-gray-100" : "hover:bg-gray-50"
                  }`}
                >
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src={`https://i.pravatar.cc/150?u=${chat.id}`} />
                    <AvatarFallback>{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-gray-800 text-sm">{chat.name}</h3>
                      <span className="text-[10px] text-gray-400">{chat.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{chat.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* --- Center Section: Chat Area --- */}
        {/* Hidden on mobile if NO chat is selected */}
        <div className={`flex-1 flex-col h-full ${!selectedChat ? "hidden md:flex" : "flex"}`}>
          
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b bg-white">
            <div className="flex items-center gap-3">
              {/* Back Button for Mobile */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden -ml-2 text-gray-600"
                onClick={() => setSelectedChat(null)}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>

              <Avatar className="h-10 w-10 border">
                <AvatarImage src="https://i.pravatar.cc/150?u=rakibul" />
                <AvatarFallback>R</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-bold text-sm text-gray-800">Rakibul</h2>
                <p className="text-[10px] text-gray-400">Last seen: 4 hours ago</p>
              </div>
            </div>

            {/* Mobile Options Menu (Shows right sidebar items on mobile) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Media & File</DropdownMenuItem>
                <DropdownMenuItem className="text-red-500">Report User</DropdownMenuItem>
                <DropdownMenuItem>Delete Conversation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="flex-1 p-4 md:p-6 bg-[#EDF7ED]">
            <div className="space-y-8 pb-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "me" ? "items-end" : "items-start"
                  }`}
                >
                  <div className="flex items-start gap-2 max-w-[85%] md:max-w-[80%]">
                    {msg.sender === "them" && (
                      <Avatar className="h-8 w-8 mt-auto border hidden sm:block">
                        <AvatarImage src="https://i.pravatar.cc/150?u=them" />
                      </Avatar>
                    )}
                    <div
                      className={`p-3 md:p-4 text-[13px] leading-relaxed shadow-sm ${
                        msg.sender === "me"
                          ? "bg-[#5D6B7A] text-white rounded-2xl rounded-tr-none"
                          : "bg-white text-gray-700 rounded-2xl rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                  <span className="text-[9px] text-gray-400 mt-1 px-2">
                    {msg.time}
                  </span>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <div className="p-3 md:p-4 bg-[#EDF7ED]">
            <div className="flex items-center gap-2 md:gap-3 bg-white rounded-xl p-2 px-3 md:px-4 shadow-sm border">
              <Input
                placeholder="Type a message ..."
                className="border-none focus-visible:ring-0 text-sm shadow-none h-10 px-0"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button variant="ghost" size="icon" className="text-gray-400 shrink-0">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button 
                className="bg-[#3FAE2A] hover:bg-green-700 rounded-full h-10 w-10 p-0 shadow-lg shrink-0"
                onClick={() => setInputValue("")}
              >
                <SendHorizontal className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
        </div>

        {/* --- Right Sidebar: Context Options (Desktop Only) --- */}
        <div className="w-64 p-6 hidden lg:block border-l h-full">
          <div className="bg-white border rounded-2xl shadow-sm p-2 space-y-1">
            <Button variant="ghost" className="w-full justify-start text-sm font-medium text-gray-700 hover:bg-gray-50">
              Media & File
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm font-medium text-red-500 hover:bg-red-50">
              Report User
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm font-medium text-gray-700 hover:bg-gray-50">
              Delete Conversations
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}