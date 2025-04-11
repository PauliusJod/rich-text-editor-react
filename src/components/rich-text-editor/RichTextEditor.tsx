import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { Button } from "../ui/button";
import { useState } from "react";

const extensions = [
  StarterKit.configure({
    bulletList: {
      HTMLAttributes: {
        class: "list-disc ml-3",
      },
    },
    orderedList: {
      HTMLAttributes: {
        class: "list-decimal ml-3",
      },
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Highlight,
  TextStyle,
  Color,
];

const content = "";

const Tiptap = () => {
  const [borderStyle, setBorderStyle] = useState<string>("border border-slate-300 rounded-md");
  const [shadowStyle, setShadowStyle] = useState<string>("shadow-xs shadow-slate-800");
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class: `min-h-[160px] ${borderStyle} ${shadowStyle} bg-slate-50 px-3 py-2`,
      },
    },
  });
  const changeBackgroundColor = (value: string) => {
    document.documentElement.style.setProperty("--background", value);
  };
  return (
    <div className='min-w-md lg:min-w-2xl py-2'>
      <MenuBar
        editor={editor}
        bStyle={borderStyle}
        sStyle={shadowStyle}
      />
      <EditorContent editor={editor} />
      <div className='fixed top-10 right-0 -translate-x-0 lg:-translate-x-25 xl:-translate-x-50 rounded-md shadow-inner shadow-slate-300 max-w-2/12 grid grid-cols-1 gap-1 p-2'>
        <Button
          size={"sm"}
          className='text-xs cursor-pointer bg-slate-600'
          onClick={() => {
            setBorderStyle("border border-slate-300 rounded-md");
            setShadowStyle("shadow-xs shadow-slate-800");
            changeBackgroundColor("#f1f5f9");
          }}>
          Option 1
        </Button>
        <Button
          size={"sm"}
          className='text-xs cursor-pointer bg-slate-600'
          onClick={() => {
            setBorderStyle("border border-green-700 rounded-md");
            setShadowStyle("shadow-xs shadow-green-700");
            changeBackgroundColor("#f1f5f9");
          }}>
          Option 2
        </Button>
        <Button
          size={"sm"}
          className='text-xs cursor-pointer bg-slate-700'
          onClick={() => {
            setBorderStyle("border-2 border-slate-400 rounded-none");
            setShadowStyle("shadow-xs shadow-slate-800");
            changeBackgroundColor("#f1f5f9");
          }}>
          Option 3
        </Button>
        <Button
          size={"sm"}
          className='text-xs cursor-pointer bg-slate-700'
          onClick={() => {
            setBorderStyle("border border-slate-100 rounded-md");
            setShadowStyle("shadow-xs shadow-slate-100");
            changeBackgroundColor("#94a3b8");
          }}>
          Option 4
        </Button>
        <Button
          size={"sm"}
          className='text-xs cursor-pointer bg-slate-800'
          onClick={() => {
            setBorderStyle("border border-green-700 rounded-none");
            setShadowStyle("shadow-xs shadow-slate-700");
            changeBackgroundColor("#94a3b8");
          }}>
          Option 5
        </Button>
      </div>
    </div>
  );
};

export default Tiptap;
