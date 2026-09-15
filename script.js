async function loadServers() {
  const response = await fetch('servers.json');
  const servers = await response.json();

  const pinnedContainer = document.getElementById('pinned');
  const recentContainer = document.getElementById('recent');

  servers.forEach(server => {
    const card = document.createElement('div');
    card.className = 'server-card';
    card.innerHTML = `
      <img src="${server.banner}" alt="${server.name}">
      <div class="server-content">
        <h3>${server.name}</h3>
        <p>Von: ${server.owner}<br>${server.description}</p>
        <span>${server.members} Mitglieder • Gebumpt ${server.bumped}</span>
        <div class="buttons">
          <button class="visit">Beitreten</button>
          <button class="bump">Bumpen</button>
        </div>
      </div>
    `;
    if (server.type === 'gepinnte') pinnedContainer.appendChild(card);
    else recentContainer.appendChild(card);
  });
}

loadServers();

