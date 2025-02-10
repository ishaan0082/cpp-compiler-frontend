import { Editor } from "@monaco-editor/react";

function Editor_Output({editor_value,output}) {
    const snippet = `#include <bits/stdc++.h>
using namespace std;

int main() {
    
    return 0;
}`;
    return (
    <div className="flex flex-row h-screen">
                <div className="flex-1"> 
                    <Editor
                        height="100vh"
                        defaultLanguage="cpp"
                        defaultValue = {snippet}
                        theme="vs-dark"
                        onChange={(e) => { editor_value.current = e;}}
                        options={{
                            fontSize: 16,
                            automaticLayout: true,
                        }}
                    />
                </div>

                <div className="output flex-1 bg-gray-800 text-white p-4">
                    {output}
                </div>
    </div>
    );
}

export default Editor_Output;
