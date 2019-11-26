import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./style.scss"

export default class EditorComponent extends Component {
  state = {
    content: ''
  }

  handleEditorChange = (content, editor) => {
    this.setState({ content });
    const { id, onChange } = this.props
    onChange(id, this.state.content)
  }

  render() {
    const { content } = this.state
    return (
      <div className="Editor">
        {/* https://www.tiny.cloud/docs/integrations/react/ */}
        <Editor
          /**
           * apiKey:
           * 微小的API密钥。使用Tiny Cloud进行部署以提供TinyMCE编辑器时需要。要注册Tiny Cloud API密钥，请访问[https://www.tiny.cloud/signup/]
           * 默认值： no-api-key
           * 类型：字符串
           */
          apiKey="mykf2qrqqf6io8n1a3dn3kbpfgmln7akx6d2fgqtzdxdob41"
          /**
           * cloudChannel:
           * 默认值： 5-stable
           * 可能的值： 5-stable，5-testing，5-dev
           * 将用于编辑器的TinyMCE构建更改为以下云通道之一：
           *  5-stable（默认）：TinyMCE的当前企业版本。
           *  5-testing：TinyMCE下一个企业版本的当前候选版本。
           *  5-dev：TinyMCE的夜间构建版本。
           */
          cloudChannel="5-dev"
          /**
           * disabled:
           * 该disabled属性可以在“禁用”（只读）模式（true）和标准可编辑模式（false）之间动态切换编辑器。
           * 默认值： false
           * 可能的值： true，false
           */
          disabled={false}
          /**
           * ID:
           * 编辑器的ID。用于使用tinymce.get("ID")方法检索编辑器实例。默认为自动生成的UUID。
           * 默认值：自动生成的UUID。
           * 类型：字符串
           */
          id="uuid"
          /**
           * init:发送给对象的tinymce.init方法用于初始化编辑器。
           * 有关TinyMCE选择器（tinymce.init）的信息，请参阅：基本设置[https://www.tiny.cloud/docs/general-configuration-guide/basic-setup/]。
           * 默认值： {{ }}
           * 类型：对象
           */
          init={{
            height: '100%',
            /**
             * 语言设置
             */
            language: "zh_CN",
            language_url: "/zh-CN.js",
            /**
             * block_formats:
             * 此选项定义了在formatselect下拉工具栏按钮和blockformats菜单项中显示的格式。字符串中的每个项目均应以分号分隔，并使用形式指定title=block。
             * 类型： String
             * 默认值： 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6; Preformatted=pre'
             */
            /**
             * branding:
             * 使用该branding选项可以禁用状态栏中显示的“ 由Powered by Tiny ”功能，以进行产品归因。
             * 类型： Boolean
             * 默认值： true
             * 可能的值： true，false
             */
            branding: false,
            /**
             * plugins:
             * 该plugins配置选项允许在编辑器中的插件功能。TinyMCE插件提供有用的功能，以扩展和增强TinyMCE体验。
             * 启用插件功能很简单。只需将plugins键添加到tinymce.init()并提供逗号，空格分隔的字符串或字符串数​​组作为值。
             * 有关配置插件的文档在文档的相关部分中。插件，它们的选项和控件关联的完整列表在此处提供[https://www.tiny.cloud/docs/plugins/]。
             *  plugins: 'advlist autolink link image lists charmap print preview'
             */
            plugins: 'print preview fullpage powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap mentions quickbars linkchecker emoticons',
            /**
             * Toolbar & menu configuration:
             * TinyMCE默认工具栏包含以下按钮：
             * newdocument（新文件）	    bold（粗体）	            italic（斜体）	                underline（强调）	      strikethrough（删除线）
             * alignleft（左边对齐）      aligncenter（中间对齐）	  alignright（右边对齐）	         alignjustify（两端对齐） styleselect（样式选择）
             * formatselect（格式选择）	  fontselect（字体选择）	  fontsizeselect（字体大小选择）	 cut（切）	             copy（复制）
             * paste（剪切）              bullist（无须列表）	      numlist（有序列表）	            outdent（	突出）	      indent（缩进）
             * blockquote（块引用）	      undo（撤消）	            redo（重做）	                  removeformat（删除格式）subscript（下标）
             * superscript（上标）
             * 默认的TinyMCE工具栏和菜单栏状态
             * 该toolbar选项显示，订购和分组工具栏按钮。
             * 使用以空格分隔的列表来指定出现在TinyMCE工具栏中的按钮。"|"在按钮组之间使用管道字符在此列表中创建组。
             *  toolbar: 'undo redo | styleselect | bold italic | link image',
             * 将布尔值设置为false可以完全禁用工具栏。本示例禁用工具栏。
             *  toolbar: false
             * 下面的示例通过提供一个array用空格分隔的字符串来指定多个工具栏。
             *  toolbar: [
             *    'undo redo | styleselect | bold italic | link image',
             *    'alignleft aligncenter alignright'
             *  ]
             */
            toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
            /**
             * menubar:快速浏览菜单和菜单栏控件
             * 就像有toolbar选择一样，也有menu选择。有两个与菜单相关的选项：menu和menubar。让我们快速看一下默认菜单项。在本指南的示例中使用了其中的某些设置，并且在插件和自定义文档中使用了所有这些设置。
             * 默认菜单控件
             * newdocument, undo, redo, visualaid, cut, copy, paste, selectall, bold, italic, underline, strikethrough, subscript, superscript, removeformat, formats
             * menubar影响放置在菜单栏本身上的项目，并menu影响出现在菜单下拉菜单中的单个项目。menu还提供菜单的精细控制。可以使用创建菜单项的自定义标题menu。
             * 在下面的代码片段菜单栏只包括菜单项File，Edit和View。
             *  menubar: 'file edit view'
             * 以下示例创建一个Edit仅包含剪切，复制和粘贴项目的菜单。
             *  menu: {
             *    view: {title: 'Edit', items: 'cut copy paste'}
             *  }
             * 通过添加title值来创建菜单标题。下面的示例创建一个标题为“ Happy”的菜单。在下面的代码段中，我们创建一个标题为“ Happy”的菜单，其中包括“ Source code”项。
             *  menu: {
             *    view: {title: 'Happy', items: 'code'}
             *  },
             *  plugins: 'code'
             * 将menubaror 的值设置toolbar为false会将其删除。下面的示例删除了工具栏和菜单栏。
             *  menubar: false,  // removes the menubar
             *  toolbar: false  // removes the toolbar
             */
            menubar: false,
            /**
             * resize:
             * 此选项使您能够禁用调整大小手柄或将其设置为同时调整水平和垂直大小。该选项可以为true，false或string 'both'。False禁用调整大小，true仅启用垂直调整大小，可以'both'在水平和垂直两个方向上调整大小。
             * 类型： Boolean
             * 默认值： true
             * 可能的值： true，false，'both'
             */
            resize: false,
            /**
             * automatic_uploads:
             * 启用或禁用自动上传由数据URL或Blob URI表示的图像。此类图像是生成的，例如，通过Image Tools插件对图像进行操作的结果，或将图像从桌面拖放到编辑器中之后生成的图像。
             * 类型： Boolean
             * 默认值： true
             * 可能的值： true，false
             */
            // automatic_uploads: false,
            /**
             * images_upload_url：
             * 此选项使您可以为服务器端上载处理程序指定URL。每次您调用时都会触发上传，editor.uploadImages()或者-如果automatic_uploads启用了选项，则会自动触发- 上载处理程序应以以下格式返回上载文件的新位置：
             */
            // images_upload_url: 'postAcceptor.php',
            /**
             * images_upload_handler:
             * 该images_upload_handler选项允许你指定被用来替代TinyMCE的默认的JavaScript和定制逻辑上传处理函数的函数。
             * 上载处理程序函数采用三个参数：blobInfo，success回调和failure回调。如果未设置此选项，则TinyMCE会利用一次XMLHttpRequest将一个图像上传到服务器，并使用远程图像的位置调用成功回调。
             * 注意：请注意，使用此选项时，不需要其他图像上传器选项。此外，如果您希望TinyMCE将<image>标签的src属性替换为远程位置，请使用images_upload_handler函数中定义的成功回调和返回的JSON对象的location属性。
             * 类型： JavaScript Function
             */
            images_upload_handler: function (blobInfo, success, failure) {
              console.log(blobInfo, success, failure)
            }
          }}
          /**
           * initialValue:
           * 初始化编辑器时，编辑器的初始内容。
           * 默认值： " "
           * 类型：字符串
           */
          initialValue="<p>This is the initial content of the editor</p>"
          /**
           * inline:
           * 用于将编辑器设置为内联模式。使用与TinyMCE选择器（）中的<Editor inline={true} />设置相同。{inline: true}tinymce.init
           * 有关嵌入式模式的信息，请参阅：
           *  用户界面选项-inline[https://www.tiny.cloud/docs/configure/editor-appearance/#inline]
           *  设置嵌入式编辑模式[https://www.tiny.cloud/docs/general-configuration-guide/use-tinymce-inline/]。
           * 默认值： false
           * 可能的值： true，false
           */
          inline={false}
          /**
           * onEditorChange:
           * 用于将编辑器的状态存储在编辑器React组件之外。当将TinyMCE React组件用作受控组件时，将使用此属性。
           * 有关更多信息，请参见：将TinyMCE React组件用作受控组件[https://www.tiny.cloud/docs/integrations/react/#usingthetinymcereactcomponentasacontrolledcomponent]。
           * 类型： EventHandler
           * 要将编辑器用作受控组件，请使用onEditorChange事件而不是onChange事件，例如：
           */
          onEditorChange={this.handleEditorChange}
          /**
           * Event binding:
           * 可以将功能绑定到编辑器事件，例如：
           * onActivate/onAddUndo/onBeforeAddUndo/onBeforeExecCommand/onBeforeGetContent/onBeforeRenderUI/
           * onBeforeSetContent/onBeforePaste/onBlur/onChange/onClearUndos/onClick/onContextMenu/onCopy/onCut/
           * onDblclick/onDeactivate/onDirty/onDrag/onDragDrop/onDragEnd/onDragGesture/onDragOver/onDrop/onExecCommand/
           * onFocus/onFocusIn/onFocusOut/onGetContent/onHide/onInit/onKeyDown/onKeyPress/onKeyUp/onLoadContent/onMouseDown/
           * onMouseEnter/onMouseLeave/onMouseMove/onMouseOut/onMouseOver/onMouseUp/onNodeChange/onObjectResizeStart/
           * onObjectResized/onObjectSelected/onPaste/onPostProcess/onPostRender/onPreProcess/onProgressState/onRedo/
           * onRemove/onReset/onSaveContent/onSelectionChange/onSetAttrib/onSetContent/onShow/onSubmit/onUndo/onVisualAid
           */
          onChange={this.handleChange}
          /**
           * plugins:
           * 用于包括编辑器的插件。使用与TinyMCE选择器（）中的<Editor plugins="lists" />设置相同。{plugins: "lists"}tinymce.init
           * 有关将插件添加到TinyMCE的信息，请参阅：将插件添加到TinyMCE[https://www.tiny.cloud/docs/plugins/]。
           * 类型：字符串或数组
           */
          /**
           * tagName:
           * 仅在时有效<Editor inline={true} />。用于以内联模式为编辑器定义HTML元素。
           * 默认值： div
           * 类型：字符串
           */
          tagName="div"
          /**
           * textareaName:
           * 设置表单中用于编辑器name的textarea元素的属性。
           * 默认值： ' '
           * 类型：字符串
           */
          textareaName=""
          /**
           * toolbar:
           * 用于设置编辑器的工具栏。使用与TinyMCE选择器（）中的<Editor toolbar='bold' />设置相同。{toolbar: 'bold'}tinymce.init
           * 有关设置TinyMCE工具栏的信息，请参阅：用户界面选项-工具栏[https://www.tiny.cloud/docs/configure/editor-appearance/#toolbar]。
           * 默认值： ' '
           * 可能的值：请参阅编辑器控件标识符-工具栏控件[https://www.tiny.cloud/docs/advanced/editor-control-identifiers/]。
           * 类型：字符串
           */
          /**
           * value：
           * 通过设置value属性并使用onEditorChange事件，此属性允许将编辑器用作受控组件。
           * 有关更多信息，请参见：将TinyMCE React组件用作受控组件[https://www.tiny.cloud/docs/integrations/react/#usingthetinymcereactcomponentasacontrolledcomponent]。
           * 类型：字符串
           */
          value={content}
        />
      </div>
    );
  }
}