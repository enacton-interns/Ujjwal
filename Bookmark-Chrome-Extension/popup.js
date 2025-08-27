const saveBtn = document.getElementById("saveBtn");
const bookmarkList = document.getElementById("bookmarkList");

// Save current tab
saveBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const bookmark = {
      title: tab.title,
      url: tab.url,
    };

    chrome.storage.local.get(["bookmarks"], (result) => {
      const bookmarks = result.bookmarks || [];
      bookmarks.push(bookmark);
      chrome.storage.local.set({ bookmarks }, () => {
        renderBookmarks(bookmarks);
      });
    });
  });
});

// Load bookmarks when popup opens
document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["bookmarks"], (result) => {
    renderBookmarks(result.bookmarks || []);
  });
});

function renderBookmarks(bookmarks) {
  bookmarkList.innerHTML = "";
  bookmarks.forEach((bm, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${bm.url}" target="_blank">${bm.title}</a>
      <button class="removeBtn" data-index="${index}">❌</button>
    `;
    bookmarkList.appendChild(li);
  });

  // Handle delete
  bookmarkList.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      bookmarks.splice(index, 1);
      chrome.storage.local.set({ bookmarks }, () => {
        renderBookmarks(bookmarks);
      });
    });
  });
}
