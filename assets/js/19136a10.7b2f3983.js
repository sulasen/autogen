"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3595],{99640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var a=t(85893),o=t(11151);const i={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/chat-termination.ipynb",source_notebook:"/website/docs/tutorial/chat-termination.ipynb",title:"Terminating Conversations Between Agents"},s="Terminating Conversations Between Agents",r={id:"tutorial/chat-termination",title:"Terminating Conversations Between Agents",description:"Open In Colab",source:"@site/docs/tutorial/chat-termination.mdx",sourceDirName:"tutorial",slug:"/tutorial/chat-termination",permalink:"/autogen/docs/tutorial/chat-termination",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/chat-termination.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/chat-termination.ipynb",source_notebook:"/website/docs/tutorial/chat-termination.ipynb",title:"Terminating Conversations Between Agents"},sidebar:"docsSidebar",previous:{title:"Introduction to AutoGen",permalink:"/autogen/docs/tutorial/introduction"},next:{title:"Allowing Human Feedback in Agents",permalink:"/autogen/docs/tutorial/human-in-the-loop"}},c={},h=[{value:"Parameters in <code>initiate_chat</code>",id:"parameters-in-initiate_chat",level:2},{value:"Agent-triggered termination",id:"agent-triggered-termination",level:2},{value:"Using <code>max_consecutive_auto_reply</code>",id:"using-max_consecutive_auto_reply",level:3},{value:"Using <code>is_termination_msg</code>",id:"using-is_termination_msg",level:3},{value:"Summary",id:"summary",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"terminating-conversations-between-agents",children:"Terminating Conversations Between Agents"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/website/docs/tutorial/chat-termination.ipynb",children:(0,a.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/website/docs/tutorial/chat-termination.ipynb",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,a.jsx)(n.p,{children:"In this chapter, we will explore how to terminate a conversation between\nAutoGen agents."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"But why is this important?"})," Its because in any complex, autonomous\nworkflows it\u2019s crucial to know when to stop the workflow. For example,\nwhen the task is completed, or perhaps when the process has consumed\nenough resources and needs to either stop or adopt different strategies,\nsuch as user intervention. So AutoGen natively supports several\nmechanisms to terminate conversations."]}),"\n",(0,a.jsx)(n.p,{children:"How to Control Termination with AutoGen? Currently there are two broad\nmechanism to control the termination of conversations between agents:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsxs)(n.strong,{children:["Specify parameters in ",(0,a.jsx)(n.code,{children:"initiate_chat"})]}),": When initiating a chat,\nyou can define parameters that determine when the conversation\nshould end."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Configure an agent to trigger termination"}),": When defining\nindividual agents, you can specify parameters that allow agents to\nterminate of a conversation based on particular (configurable)\nconditions."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"parameters-in-initiate_chat",children:["Parameters in ",(0,a.jsx)(n.code,{children:"initiate_chat"})]}),"\n",(0,a.jsxs)(n.p,{children:["In the previous chapter we actually demonstrated this when we used the\n",(0,a.jsx)(n.code,{children:"max_turns"})," parameter to limit the number of turns. If we increase\n",(0,a.jsx)(n.code,{children:"max_turns"})," to say ",(0,a.jsx)(n.code,{children:"3"})," notice the conversation takes more rounds to\nterminate:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import os\nfrom autogen import ConversableAgent\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'cathy = ConversableAgent(\n    "cathy",\n    system_message="Your name is Cathy and you are a part of a duo of comedians.",\n    llm_config={"config_list": [{"model": "gpt-4", "temperature": 0.9, "api_key": os.environ.get("OPENAI_API_KEY")}]},\n    human_input_mode="NEVER",  # Never ask for human input.\n)\n\njoe = ConversableAgent(\n    "joe",\n    system_message="Your name is Joe and you are a part of a duo of comedians.",\n    llm_config={"config_list": [{"model": "gpt-4", "temperature": 0.7, "api_key": os.environ.get("OPENAI_API_KEY")}]},\n    human_input_mode="NEVER",  # Never ask for human input.\n)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'result = joe.initiate_chat(cathy, message="Cathy, tell me a joke.", max_turns=2)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"joe (to cathy):\n\nCathy, tell me a joke.\n\n--------------------------------------------------------------------------------\ncathy (to joe):\n\nSure, here's one for you:\n\nWhy don't scientists trust atoms?\n\nBecause they make up everything!\n\n--------------------------------------------------------------------------------\njoe (to cathy):\n\nHaha, that's a good one, Cathy! Okay, my turn. \n\nWhy don't we ever tell secrets on a farm?\n\nBecause the potatoes have eyes, the corn has ears, and the beans stalk.\n\n--------------------------------------------------------------------------------\ncathy (to joe):\n\nHaha, that's a great one! A farm is definitely not the place for secrets. Okay, my turn again. \n\nWhy couldn't the bicycle stand up by itself?\n\nBecause it was two-tired!\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'result = joe.initiate_chat(\n    cathy, message="Cathy, tell me a joke.", max_turns=3\n)  # increase the number of max turns before termination\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"joe (to cathy):\n\nCathy, tell me a joke.\n\n--------------------------------------------------------------------------------\ncathy (to joe):\n\nSure, here's one for you:\n\nWhy don't scientists trust atoms?\n\nBecause they make up everything!\n\n--------------------------------------------------------------------------------\njoe (to cathy):\n\nHaha, that's a good one, Cathy! Okay, my turn. \n\nWhy don't we ever tell secrets on a farm?\n\nBecause the potatoes have eyes, the corn has ears, and the beans stalk.\n\n--------------------------------------------------------------------------------\ncathy (to joe):\n\nHaha, that's a great one! A farm is definitely not the place for secrets. Okay, my turn again. \n\nWhy couldn't the bicycle stand up by itself?\n\nBecause it was two-tired!\n\n--------------------------------------------------------------------------------\njoe (to cathy):\n\nHaha, that's a wheely good one, Cathy!\n\nWhy did the golfer bring two pairs of pants?\n\nIn case he got a hole in one!\n\n--------------------------------------------------------------------------------\ncathy (to joe):\n\nHaha, that's a perfect swing of a joke!\n\nWhy did the scarecrow win an award?\n\nBecause he was outstanding in his field!\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.h2,{id:"agent-triggered-termination",children:"Agent-triggered termination"}),"\n",(0,a.jsx)(n.p,{children:"You can also terminate a conversation by configuring parameters of an\nagent. Currently, there are two parameters you can configure:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"max_consecutive_auto_reply"}),": This condition trigger termination if\nthe number of automatic responses to the same sender exceeds a\nthreshold. You can customize this using the\n",(0,a.jsx)(n.code,{children:"max_consecutive_auto_reply"})," argument of the ",(0,a.jsx)(n.code,{children:"ConversableAgent"}),"\nclass. To accomplish this the agent maintains a counter of the\nnumber of consecutive automatic responses to the same sender. Note\nthat this counter can be reset because of human intervention. We\nwill describe this in more detail in the next chapter."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"is_termination_msg"}),": This condition can trigger termination if the\n",(0,a.jsx)(n.em,{children:"received"})," message satisfies a particular condition, e.g., it\ncontains the word \u201cTERMINATE\u201d. You can customize this condition\nusing the ",(0,a.jsx)(n.code,{children:"is_terminate_msg"})," argument in the constructor of the\n",(0,a.jsx)(n.code,{children:"ConversableAgent"})," class."]}),"\n"]}),"\n",(0,a.jsxs)(n.h3,{id:"using-max_consecutive_auto_reply",children:["Using ",(0,a.jsx)(n.code,{children:"max_consecutive_auto_reply"})]}),"\n",(0,a.jsxs)(n.p,{children:["In the example below lets set ",(0,a.jsx)(n.code,{children:"max_consecutive_auto_reply"})," to ",(0,a.jsx)(n.code,{children:"1"})," and\nnotice how this ensures that Joe only replies once."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'joe = ConversableAgent(\n    "joe",\n    system_message="Your name is Joe and you are a part of a duo of comedians.",\n    llm_config={"config_list": [{"model": "gpt-4", "temperature": 0.7, "api_key": os.environ.get("OPENAI_API_KEY")}]},\n    human_input_mode="NEVER",  # Never ask for human input.\n    max_consecutive_auto_reply=1,  # Limit the number of consecutive auto-replies.\n)\n\nresult = joe.initiate_chat(cathy, message="Cathy, tell me a joke.")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"joe (to cathy):\n\nCathy, tell me a joke.\n\n--------------------------------------------------------------------------------\ncathy (to joe):\n\nSure, here's one for you:\n\nWhy don't scientists trust atoms?\n\nBecause they make up everything!\n\n--------------------------------------------------------------------------------\njoe (to cathy):\n\nHaha, that's a good one, Cathy! Okay, my turn. \n\nWhy don't we ever tell secrets on a farm?\n\nBecause the potatoes have eyes, the corn has ears, and the beans stalk.\n\n--------------------------------------------------------------------------------\ncathy (to joe):\n\nHaha, that's a great one! A farm is definitely not the place for secrets. Okay, my turn again. \n\nWhy couldn't the bicycle stand up by itself?\n\nBecause it was two-tired!\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"using-is_termination_msg",children:["Using ",(0,a.jsx)(n.code,{children:"is_termination_msg"})]}),"\n",(0,a.jsx)(n.p,{children:"Let\u2019s set the termination message to \u201cGOOD BYE\u201d and see how the\nconversation terminates."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'joe = ConversableAgent(\n    "joe",\n    system_message="Your name is Joe and you are a part of a duo of comedians.",\n    llm_config={"config_list": [{"model": "gpt-4", "temperature": 0.7, "api_key": os.environ.get("OPENAI_API_KEY")}]},\n    human_input_mode="NEVER",  # Never ask for human input.\n    is_termination_msg=lambda msg: "good bye" in msg["content"].lower(),\n)\n\nresult = joe.initiate_chat(cathy, message="Cathy, tell me a joke and then say the words GOOD BYE.")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"joe (to cathy):\n\nCathy, tell me a joke and then say the words GOOD BYE.\n\n--------------------------------------------------------------------------------\ncathy (to joe):\n\nWhy don't scientists trust atoms?\n\nBecause they make up everything!\n\nGOOD BYE!\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.p,{children:"Notice how the conversation ended based on contents of cathy\u2019s message!"}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(n.p,{children:["In this chapter we introduced mechanisms to terminate a conversation\nbetween agents. You can configure both parameters in ",(0,a.jsx)(n.code,{children:"initiate_chat"})," and\nalso configuration of agents."]}),"\n",(0,a.jsxs)(n.p,{children:["That said, it is important to note that when a termination condition is\ntriggered, the conversation may not always terminated immediately. The\nactual termination depends on the ",(0,a.jsx)(n.code,{children:"human_input_mode"})," argument of the\n",(0,a.jsx)(n.code,{children:"ConversableAgent"})," class. For example, when mode is ",(0,a.jsx)(n.code,{children:"NEVER"})," the\ntermination conditions above will end the conversations. But when mode\nis ",(0,a.jsx)(n.code,{children:"ALWAYS"})," or ",(0,a.jsx)(n.code,{children:"TERMINATE"}),", it will not terminate immediately we\ndescribe this behavior and why its important in the next chapter."]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(67294);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);