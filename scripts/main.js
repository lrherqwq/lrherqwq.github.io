export const gethtml = (title) => {
  let html = `<!DOCTYPE html>
  <html lang="en">
    ...${title}
  </html>
  `;
  return html;
};


export2Excel() {
  // 生成html字符串
  const html = gethtml("前端小蜗");
  // 创建一个a标签
  var a = document.createElement("a");
  // 创建一个包含blob对象的url
  var url = window.URL.createObjectURL(
      new Blob([html], {
          type: "",
      })
  );
  a.href = url;
  a.download = "file.html";
  a.click();
  window.URL.revokeObjectURL(url);
}