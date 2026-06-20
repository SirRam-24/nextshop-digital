import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Volume2, MessageSquare, Rocket, FileText } from 'lucide-react';

export default function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [muted, setMuted] = useState(false);
  const [userInput, setUserInput] = useState('');
  
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! How may I help you with the website? 🤖\n\nI can recommend the perfect website plan, explain our 24-hour guarantee, or set up a free design demo. Ask me anything!",
      isInitial: true
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (chatOpen) {
      scrollToBottom();
    }
  }, [chatOpen, chatMessages]);

  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || userInput;
    if (!query.trim() || isLoading || isStreaming) return;

    // Add user message
    const updatedMessages = [...chatMessages, { sender: 'user', text: query }];
    setChatMessages(updatedMessages);
    
    if (!textToSend) {
      setUserInput('');
    }

    setIsLoading(true);

    try {
      // Filter out initial welcome message and map message history to role format for the API
      const formattedHistory = updatedMessages
        .filter(msg => !msg.isInitial)
        .map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text
        }));

      const response = await fetch('https://nexa-api-drab.vercel.app/chat', {
        method: 'POST',
        headers: {
          'Authorization': 'CgTV5mooBjq6wHJGY3kvZ_tBouag2uf61xu0QyNIIV8',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: '69ff4406c4ecad33d8f619da',
          messages: formattedHistory
        })
      });

      if (!response.ok) {
        throw new Error(`API response status: ${response.status}`);
      }

      setIsLoading(false);
      setIsStreaming(true);

      // Create an empty bot message that we will stream into
      let streamedResponseText = '';
      const updateBotMessage = (text) => {
        setChatMessages(prev => {
          const lastMsg = prev[prev.length - 1];
          if (lastMsg && lastMsg.sender === 'bot' && !lastMsg.isInitial) {
            return [...prev.slice(0, -1), { sender: 'bot', text }];
          } else {
            return [...prev, { sender: 'bot', text }];
          }
        });
      };

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let done = false;
      let buffer = '';

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          buffer += decoder.decode(value, { stream: !done });
          
          // Split buffer by newlines to get SSE data entries
          const lines = buffer.split('\n');
          buffer = lines.pop() || ''; // Keep partial line in buffer

          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;
            
            let dataContent = trimmed;
            if (trimmed.startsWith('data:')) {
              dataContent = trimmed.substring(5).trim();
            }

            if (dataContent === '[DONE]') {
              done = true;
              break;
            }

            try {
              // Try parsing chunk as JSON
              const parsed = JSON.parse(dataContent);
              const chunkText = parsed.choices?.[0]?.delta?.content || parsed.content || parsed.response || parsed.reply || parsed.text || '';
              streamedResponseText += chunkText;
              updateBotMessage(streamedResponseText);
            } catch (e) {
              // If parsing fails, chunk is likely raw text or partial data
              // We only append if it's not starting with an indicator like "data:"
              if (!dataContent.startsWith('data:')) {
                streamedResponseText += dataContent;
                updateBotMessage(streamedResponseText);
              }
            }
          }
        }
      }

      // Flush remaining buffer content
      if (buffer.trim()) {
        const trimmed = buffer.trim();
        let dataContent = trimmed;
        if (trimmed.startsWith('data:')) {
          dataContent = trimmed.substring(5).trim();
        }
        if (dataContent !== '[DONE]') {
          try {
            const parsed = JSON.parse(dataContent);
            const chunkText = parsed.choices?.[0]?.delta?.content || parsed.content || parsed.response || parsed.reply || parsed.text || '';
            streamedResponseText += chunkText;
            updateBotMessage(streamedResponseText);
          } catch (e) {
            streamedResponseText += dataContent;
            updateBotMessage(streamedResponseText);
          }
        }
      }

    } catch (error) {
      console.error('Chatbot API error:', error);
      setIsLoading(false);
      
      // Fallback rule-based local answers
      let botResponse = "That sounds interesting! Nextshop specializes in custom React web apps and high-performance websites. Would you like to check out our plans or talk to a consultant?";
      
      const lowerQuery = query.toLowerCase();
      if (lowerQuery.includes('plan') || lowerQuery.includes('pricing') || lowerQuery.includes('price')) {
        botResponse = "We offer custom-tailored pricing packages for every project! You can check our Pricing page to calculate project pricing or reach out to us on our Contact page to get a direct quote.";
      } else if (lowerQuery.includes('demo') || lowerQuery.includes('free') || lowerQuery.includes('try')) {
        botResponse = "Excellent choice! I can set up a free custom design mockup for your business today. Please fill out our form on the Contact page, or leave your email here, and our design consultant will get in touch!";
      } else if (lowerQuery.includes('24h') || lowerQuery.includes('delivery') || lowerQuery.includes('guarantee') || lowerQuery.includes('time')) {
        botResponse = "Yes! We guarantee same-day delivery for standard websites. Using pre-optimized templates and AI-powered development, we can launch your site within 24 hours of receiving your assets.";
      } else if (lowerQuery.includes('contact') || lowerQuery.includes('call') || lowerQuery.includes('chat')) {
        botResponse = "You can fill out the contact form on our Contact page or directly reach us at hello@nextshop.com. We would love to chat!";
      }

      setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  const suggestionChips = [
    { label: '💡 Recommend Plan', value: 'Recommend Plan' },
    { label: '⚡ 24h Delivery', value: '24h Delivery' },
    { label: '💰 Estimate Cost', value: 'Estimate Cost' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Chatbot Panel */}
      {chatOpen && (
        <div className="w-[360px] h-[520px] bg-white border border-slate-100 shadow-2xl rounded-[32px] overflow-hidden flex flex-col animate-in slide-in-from-bottom duration-300">
          
          {/* Header */}
          <div className="bg-slate-50/50 backdrop-blur-md border-b border-slate-100/60 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Styled Avatar */}
              <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-inner">
                <Bot className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div className="text-left">
                <span className="block text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  Nextshop Helper
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                </span>
                <span className="block text-[10px] text-slate-400 font-light">AI Website Consultant</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-1">
              <button 
                onClick={() => setMuted(!muted)}
                className={`p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors ${muted ? 'text-indigo-600 bg-indigo-50/50' : ''}`}
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setChatOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/30 custom-scrollbar text-[12px] text-left">
            {chatMessages.map((msg, idx) => {
              const isBot = msg.sender === 'bot';
              return (
                <div key={idx} className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}>
                  {isBot && (
                    <div className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-650 flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 stroke-[1.5]" />
                    </div>
                  )}
                  
                  <div className="space-y-3 max-w-[80%]">
                    <div className={`px-4 py-3 shadow-sm whitespace-pre-wrap leading-relaxed ${
                      isBot
                        ? 'bg-white text-slate-750 rounded-[22px] rounded-tl-none border border-slate-100/60'
                        : 'bg-indigo-600 text-white rounded-[22px] rounded-tr-none'
                    }`}>
                      {msg.text}
                    </div>

                    {/* Show buttons inside initial bot message */}
                    {msg.isInitial && (
                      <div className="space-y-2 pt-1">
                        <button
                          onClick={() => handleSendMessage('Recommend Plan')}
                          className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-750 text-white font-semibold py-3 px-4 rounded-full shadow-md shadow-indigo-100 hover:shadow-lg transition-all duration-300 text-xs"
                        >
                          <FileText className="w-4 h-4" />
                          <span>Recommend Plan</span>
                        </button>
                        <button
                          onClick={() => handleSendMessage('Try Free Demo')}
                          className="w-full flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 border border-purple-200/80 text-purple-750 font-semibold py-3 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-xs"
                        >
                          <Rocket className="w-4 h-4" />
                          <span>Try Free Demo</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            
            {/* Loading Typing Indicator Bubble */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-650 flex-shrink-0">
                  <Bot className="w-3.5 h-3.5 stroke-[1.5]" />
                </div>
                <div className="bg-white text-slate-700 rounded-[22px] rounded-tl-none border border-slate-100/60 px-4 py-3 shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-5 py-2.5 border-t border-slate-100/60 bg-white flex gap-2 overflow-x-auto custom-scrollbar whitespace-nowrap">
            {suggestionChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip.value)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[10px] font-semibold text-slate-650 hover:bg-slate-100 hover:border-slate-300 transition-colors"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-4 bg-white border-t border-slate-100 flex gap-2"
          >
            <input
              type="text"
              placeholder="Ask about websites, plans..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200/80 focus:border-indigo-500 focus:outline-none rounded-full px-5 py-3 text-xs text-slate-800 placeholder-slate-400"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center transition-colors shadow-md shadow-indigo-150"
            >
              <Send className="w-4 h-4 fill-current text-white" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Trigger Button */}
      <button 
        onClick={() => setChatOpen(!chatOpen)}
        className="w-14 h-14 rounded-full bg-indigo-600 text-white shadow-2xl flex items-center justify-center hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
      >
        {chatOpen ? (
          <X className="w-6 h-6 animate-in fade-in duration-300" />
        ) : (
          <MessageSquare className="w-6 h-6 animate-pulse" />
        )}
      </button>
    </div>
  );
}
