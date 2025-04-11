import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import {
//   ClassicEditor,
//   Essentials,
//   Paragraph,
//   Bold,
//   Italic,
//   Image,
//   ImageUpload,
// } from "ckeditor5";

// import "ckeditor5/ckeditor5.css";
import { CKEditor } from "ckeditor4-react";

function App() {
  const [uploadUrl, setUploadUrl] = React.useState(
    "http://localhost:3100/upload?CKEditor=editor1&CKEditorFuncNum=1&langCode=zh"
  );
  const [key, setKey] = React.useState((Math.random() * 10000000).toFixed());

  return (
    <div className="App">
      <div style={{ padding: 30 }}>
        <h3>Upload Url</h3>
        <input
          value={uploadUrl}
          onChange={(e) => setUploadUrl(e.target.value)}
          onBlur={() => setKey((Math.random() * 10000000).toFixed())}
          placeholder="輸入上傳網址"
          style={{ width: "100%", marginBottom: 20, padding: 10 }}
        />
        <h3>Pure Upload Testing</h3>
        <form
          action={uploadUrl}
          method="POST"
          enctype="multipart/form-data"
          style={{
            marginBottom: 20,
            borderBottom: "solid 1px #000",
            paddingBottom: 20,
          }}
        >
          <input type="file" name="upload"></input>

          <button type="submit">Upload</button>
        </form>

        <h3>CKEditor Testing</h3>

        {/* ckeditor 4 */}
        <CKEditor
          key={key}
          initData="<p>Hello from CKEditor 4!</p>"
          onInstanceReady={(e) => {
            console.log("event instance ready", e);
          }}
          // http://localhost:3000
          editorUrl="/ckeditor/ckeditor.js" // 4.22.1
          // editorUrl={"http://localhost:3100/ckeditor/ckeditor.js"}
          // debug={true}
          // config={{

          // }}
          config={{
            versionCheck: false,
            removePlugins: "about,spellchecker",
            removeButtons:
              "About,Scayt,Anchor,SpecialChar,Blockquote,HorizontalRule,RemoveFormat,Maximize,Styles,Format,Font", //
            // toolbarGroups: [
            //   { name: "document", groups: ["mode", "document", "doctools"] },
            //   { name: "clipboard", groups: ["clipboard", "undo"] },
            //   // {
            //   //   name: "editing",
            //   //   groups: ["find", "selection", "spellchecker"],
            //   // },
            //   // { name: "forms" },
            //   // "/",
            //   { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
            //   {
            //     name: "paragraph",
            //     groups: ["list", "indent", "blocks", "align", "bidi"],
            //   },
            //   { name: "links" },
            //   { name: "insert" },
            //   "/",
            //   { name: "styles" },
            //   { name: "colors" },
            //   { name: "tools" },
            //   { name: "others" },
            //   // { name: 'about' }
            // ],
            filebrowserImageUploadUrl: uploadUrl, // "/api/upload" 您的伺服器上傳 URL
            // filebrowserUploadMethod: "form", // 上傳方法
          }}
          onChange={(e) => {
            console.log("event", e);
            const editor = e.editor;
            const element = editor.element;
            // console.log("element", element);
            console.log("editor.getData", editor.getData());
          }}
          onBlur={(e) => {
            const editor = e.editor;

            console.log("onBlur editor.getData", editor.getData());
          }}
        />

        {/* ckeditor 5 */}
        {/* <CKEditor
          editor={ClassicEditor}
          config={{
            licenseKey: "GPL", // Or '<YOUR_LICENSE_KEY>'.
            plugins: [Essentials, Paragraph, Bold, Italic, Image, ImageUpload],
            toolbar: [
              "undo",
              "redo",
              "|",
              "bold",
              "italic",
              "|",
              "imageUpload",
            ],
            initialData: "<p>Hello from CKEditor 5 in React!</p>",
            simpleUpload: {
              uploadUrl: "",
              /// "https://storage.revtel-api.com/v4/storage/presigned/url?client_id=tda",
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: false,
            },
          }}
          onReady={(editor) => {
            console.log("CKEditor ready", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log("onChange", data);
            console.log("editor.data", editor.data);
          }}
          onBlur={(event, editor) => {
            const data = editor.getData();

            console.log("onBlur", data);
          }}
          onError={(error, detail) =>
            console.log("CKEditor error", error, detail)
          }
        /> */}
      </div>
    </div>
  );
}

export default App;
