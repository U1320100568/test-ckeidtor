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
    // "http://localhost:3100/upload?CKEditor=editor1&CKEditorFuncNum=1&langCode=zh"
    "https://tda-api.revtel2.com/tda/file_upload?CKEditorFuncNum=1&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImJjMzZlNTQ2LWYyNGEtNDYzNS1hNzdiLWVlY2IyMDYwMjUwNCJ9.eyJhdWQiOiJ0ZGEiLCJzdWIiOiI2NzdiNDJjMzcxZGY5ODQxMjc3MWUwZjIiLCJ0eXAiOiJhY2Nlc3MiLCJpc3MiOiJhdXRoLnJldnRlbC1hcGkuY29tL3Y0IiwiZW52IjoicHJvZHVjdGlvbiIsImdycCI6ImFkbWluIiwiaWF0IjoxNzQzNDEzMTQ5LCJleHAiOjE3NDM0MjAzNDksImp0aSI6ImFmNDVlZjAwLWVlYmEtNDc0Yy04YjE4LWEzMzQ1ZTMzNzNjYyIsImV4dCI6eyJ1c2VybmFtZSI6ImFkbWluIn19.lb2S8LJCe1rT-kSweaRduvk6dz-zCVYbX0wjQeNV7fNeppptjm2A5YGTvN87OKeH_i6dnQdFgoOQbHy7ZpgT7LaAt-YEa1L4XEVwRfkInqtSeFkjzqtabjb0bOxtlLv5rFoDpqebRbQ_8UrB9YQxO4vhE_MwwO4hLhfk7PFlML-3NKXHPVmoVERGXH7SpiL_V-5kH1e9qAF5GOzP-Vig2C9yJ7M_hq2GTU6pR0aMEOO96YTlQJK8N_jfMjZL0RPKNO02PxAg1XEETpsfvDNEc2j7y5HqL6ckdwMLurRrGLEsge0CZhk4vICl8XPBT8pZIzQG_0ce6-ZmHE5neBoLkw"
  );
  const [key, setKey] = React.useState((Math.random() * 10000000).toFixed());

  return (
    <div className="App">
      <form action={uploadUrl} method="POST" enctype="multipart/form-data">
        <input type="file" name="upload"></input>

        <button type="submit">Upload</button>
      </form>

      <div style={{ padding: 30 }}>
        <input
          value={uploadUrl}
          onChange={(e) => setUploadUrl(e.target.value)}
          onBlur={() => setKey((Math.random() * 10000000).toFixed())}
          placeholder="輸入上傳網址"
          style={{ width: "100%", marginBottom: 20, padding: 10 }}
        />

        {/* <CKEditor
          key={key}
          initData="<p>Hello from CKEditor 4!</p>"
          onInstanceReady={(e) => {
            console.log("event instance ready", e);
          }}
          //http://localhost:3000
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
        /> */}

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
