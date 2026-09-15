async function loadTeams() {
  const response = await fetch('teams.json');
  const servers = await response.json();

  const pinnedContainer = document.getElementById('pinned');
  const recentContainer = document.getElementById('recent');

  teams.forEach(team => {
    const card = document.createElement('div');
    card.className = 'server-card';
    card.innerHTML = `
      <img src="${team.banner}" alt="${team.name}">
      <div class="server-content">
        <h3>${team.name}</h3>
        <p>Von: ${team.owner}<br>${server.description}</p>
        <span>${team.members} Mitglieder • Gebumpt ${team.bumped}</span>
        <div class="buttons">
          <button class="visit">Beitreten</button>
          <button class="bump">Bumpen</button>
        </div>
      </div>
    `;
    if (team.type === 'gepinnte') pinnedContainer.appendChild(card);
    else recentContainer.appendChild(card);
  });
}

loadServers();

