"use strict";(self.webpackChunkpre_kdu=self.webpackChunkpre_kdu||[]).push([["227"],{5030:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>o});var r=JSON.parse('{"id":"scm/exercise","title":"Exercise","description":"To set your global username/email configuration:","source":"@site/docs/scm/exercise.md","sourceDirName":"scm","slug":"/scm/exercise","permalink":"/kickdrum-university/docs/scm/exercise","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Tutorials","permalink":"/kickdrum-university/docs/scm/tutorials"},"next":{"title":"Linters for Java","permalink":"/kickdrum-university/docs/tools/linters-java"}}'),t=s("5893"),i=s("65");let o={sidebar_position:2},c="Exercise",l={},a=[];function d(e){let n={code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"exercise",children:"Exercise"})}),"\n",(0,t.jsx)(n.p,{children:"To set your global username/email configuration:\nOpen the command line."}),"\n",(0,t.jsxs)(n.p,{children:["Set your username:\n",(0,t.jsx)(n.code,{children:'git config --global user.name "FIRST_NAME LAST_NAME"'})]}),"\n",(0,t.jsxs)(n.p,{children:["Set your email address:\n",(0,t.jsx)(n.code,{children:'git config --global user.email "MY_NAME@example.com"'})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For Windows folks using Git Bash, you need to ",(0,t.jsx)(n.code,{children:"cd"})," into the Desktop folder and then follow these steps."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a new repository called ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"pre-kdu-training"})})," from the command line. (",(0,t.jsx)(n.code,{children:"mkdir pre-kdu-training"})," and run ",(0,t.jsx)(n.code,{children:"git init"})," inside of it)."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a file called ",(0,t.jsx)(n.code,{children:"startup.sh"})," and paste the below contents in it."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\nset -e\nMAIN_SCRIPT_URL="https://pre-kdu.s3.us-east-1.amazonaws.com/pre-kdu.sh"\nMAIN_SCRIPT_NAME="pre-kdu.sh"\necho "Downloading $MAIN_SCRIPT_NAME..."\ncurl -o "$MAIN_SCRIPT_NAME" "$MAIN_SCRIPT_URL"\nchmod +x "$MAIN_SCRIPT_NAME"\necho "Executing $MAIN_SCRIPT_NAME..."\n./"$MAIN_SCRIPT_NAME"\necho "Deleting $MAIN_SCRIPT_NAME..."\nrm "$MAIN_SCRIPT_NAME"\necho "All tasks completed successfully!"\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"chmod +x startup.sh"})," and then execute the file ",(0,t.jsx)(n.code,{children:"./startup.sh"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["After successful run of this script go ahead and delete it ",(0,t.jsx)(n.code,{children:"rm startup.sh"}),". Continue with the next steps."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a new branch from the main branch called ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"PRE-KDU-1"})})]}),"\n",(0,t.jsx)(n.li,{children:"Create a new file called README.md in the above repository in the PRE-KDU-1 branch."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-md",metastring:'title="README.md"',children:"Feel Free to add a cool intro about yourself in the README\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Commit the above-created file with the message "PRE-KDU-1: Added README.md file"'}),"\n",(0,t.jsx)(n.li,{children:"Push the changes to the repository"}),"\n",(0,t.jsx)(n.li,{children:"Create a Pull Request from the PRE-KDU-1 branch against the main branch"}),"\n",(0,t.jsx)(n.li,{children:"Share your GitHub username with us"}),"\n",(0,t.jsxs)(n.li,{children:["Provide access to the user: ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"gowreswaran"})})," for the above-created repository"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},65:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var r=s(7294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);