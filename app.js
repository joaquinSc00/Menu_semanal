const STORAGE_KEY = "menu-semanal-rotation-v1";
const BLOCK_TURNS = 4;
const DAY_NAMES = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

const recipes = [
  {
    id: "jueves-almuerzo-pechuga-lentejas",
    meal: "almuerzo",
    title: "Pechuga con lentejas, huevo y cebolla",
    description: "Pechuga con una lata entera de lentejas, huevo y media cebolla.",
    ingredients: ["pechuga", "lentejas", "huevo", "cebolla"]
  },
  {
    id: "jueves-almuerzo-arroz-pollo",
    meal: "almuerzo",
    title: "Arroz con pollo, caldo, queso y cebolla",
    description: "Arroz con pollo, caldo, queso y media cebolla.",
    ingredients: ["arroz", "pechuga", "caldo", "queso", "cebolla"]
  },
  {
    id: "jueves-cena-tomate-relleno",
    meal: "cena",
    title: "Tomate relleno con picadillo",
    description: "Tomate relleno frio con picadillo, huevo duro, ajo y cebolla.",
    ingredients: ["tomate", "picadillo", "huevo", "ajo", "cebolla"]
  },
  {
    id: "jueves-cena-costeletas-ensalada",
    meal: "cena",
    title: "Costeletas con ensalada potente",
    description: "Costeletas en Air Fryer con tomate, lechuga y mucha cebolla.",
    ingredients: ["costeleta", "tomate", "lechuga", "cebolla"]
  },
  {
    id: "viernes-almuerzo-tortilla-arvejas-costeleta",
    meal: "almuerzo",
    title: "Tortilla de arvejas con costeleta",
    description: "Tortilla con una lata entera de arvejas, 3 huevos, queso, tomate y una costeleta.",
    ingredients: ["arvejas", "huevo", "queso", "tomate", "costeleta"]
  },
  {
    id: "viernes-almuerzo-arroz-huevo",
    meal: "almuerzo",
    title: "Arroz con huevo frito y queso",
    description: "Arroz con huevo frito, queso y caldo de verdura.",
    ingredients: ["arroz", "huevo", "queso", "caldo"]
  },
  {
    id: "viernes-cena-zapallito-revuelto",
    meal: "cena",
    title: "Zapallito revuelto con mucha cebolla",
    description: "Zapallito revuelto con queso, huevo y una cebolla y media.",
    ingredients: ["zapallito", "queso", "huevo", "cebolla"]
  },
  {
    id: "viernes-cena-jardinera-fria",
    meal: "cena",
    title: "Jardinera fria con huevos y carne",
    description: "Una lata de jardinera con 2 huevos duros y una costeleta o pechuga.",
    ingredients: ["jardinera", "huevo", "costeleta", "pechuga"]
  },
  {
    id: "sabado-almuerzo-pechuga-rebozada-arroz",
    meal: "almuerzo",
    title: "Pechuga rebozada con arroz",
    description: "Pechuga rebozada con avena y harina de almendra en Air Fryer con arroz.",
    ingredients: ["pechuga", "avena", "harina de almendra", "arroz"]
  },
  {
    id: "sabado-almuerzo-ensalada-lentejas-carne",
    meal: "almuerzo",
    title: "Ensalada de lentejas con carne",
    description: "Lentejas con tomate, cebolla, 2 huevos duros y carne.",
    ingredients: ["lentejas", "tomate", "cebolla", "huevo", "carne"]
  },
  {
    id: "sabado-cena-tomate-relleno",
    meal: "cena",
    title: "Tomate relleno con picadillo y huevo",
    description: "Tomate relleno con picadillo, huevo duro y ajo.",
    ingredients: ["tomate", "picadillo", "huevo", "ajo"]
  },
  {
    id: "sabado-cena-omelette-fiambre",
    meal: "cena",
    title: "Omelette de fiambre y queso",
    description: "Omelette de fiambre y queso con ensalada de lechuga y tomate.",
    ingredients: ["fiambre", "queso", "huevo", "lechuga", "tomate"]
  },
  {
    id: "domingo-almuerzo-bife-papas-huevo",
    meal: "almuerzo",
    title: "Bife con papas y huevo frito",
    description: "Bife o costeleta con papas en Air Fryer y huevo frito.",
    ingredients: ["bife", "costeleta", "papas", "huevo"]
  },
  {
    id: "domingo-almuerzo-arroz-costeleta",
    meal: "almuerzo",
    title: "Arroz con costeleta y queso",
    description: "Arroz con caldo, queso y tiritas de costeleta de cerdo.",
    ingredients: ["arroz", "caldo", "queso", "costeleta"]
  },
  {
    id: "domingo-cena-tortilla-arvejas-pechuga",
    meal: "cena",
    title: "Tortilla de arvejas con pechuga",
    description: "Tortilla de arvejas, 3 huevos, queso arriba y pechuga.",
    ingredients: ["arvejas", "huevo", "queso", "pechuga"]
  },
  {
    id: "domingo-cena-zapallito-revuelto",
    meal: "cena",
    title: "Zapallito revuelto clasico",
    description: "Zapallito revuelto con queso, huevo y mucha cebolla.",
    ingredients: ["zapallito", "queso", "huevo", "cebolla"]
  },
  {
    id: "lunes-almuerzo-jardinera-pechuga",
    meal: "almuerzo",
    title: "Jardinera fria con pechuga",
    description: "Jardinera fria con huevo y pechuga a la plancha.",
    ingredients: ["jardinera", "huevo", "pechuga"]
  },
  {
    id: "lunes-almuerzo-arroz-choclo-costeleta",
    meal: "almuerzo",
    title: "Arroz con choclo, queso y costeleta",
    description: "Arroz con medio choclo en lata, queso y costeleta.",
    ingredients: ["arroz", "choclo", "queso", "costeleta"]
  },
  {
    id: "lunes-cena-tomate-relleno",
    meal: "cena",
    title: "Tomate relleno con ajo",
    description: "Tomate relleno con picadillo, huevo duro y ajo.",
    ingredients: ["tomate", "picadillo", "huevo", "ajo"]
  },
  {
    id: "lunes-cena-costeletas-ensalada",
    meal: "cena",
    title: "Costeletas con ensalada fresca",
    description: "Costeletas con tomate, lechuga y cebolla.",
    ingredients: ["costeleta", "tomate", "lechuga", "cebolla"]
  },
  {
    id: "martes-almuerzo-tortilla-arvejas-carne",
    meal: "almuerzo",
    title: "Tortilla de arvejas con carne y salsa",
    description: "Tortilla de arvejas con 3 huevos, salsa de tomate arriba y carne.",
    ingredients: ["arvejas", "huevo", "salsa de tomate", "carne"]
  },
  {
    id: "martes-almuerzo-papas-cebolla-huevo",
    meal: "almuerzo",
    title: "Papas y cebollas en Air Fryer",
    description: "Papas y cebollas con especias en Air Fryer, acompañadas con 2 huevos fritos.",
    ingredients: ["papas", "cebolla", "huevo"]
  },
  {
    id: "martes-cena-ensalada-lentejas",
    meal: "cena",
    title: "Ensalada de lentejas",
    description: "Lentejas con tomate, cebolla y huevo duro.",
    ingredients: ["lentejas", "tomate", "cebolla", "huevo"]
  },
  {
    id: "martes-cena-omelette-fiambre",
    meal: "cena",
    title: "Omelette de fiambre y queso con ensalada",
    description: "Omelette de fiambre y queso con tomate y lechuga.",
    ingredients: ["fiambre", "queso", "huevo", "tomate", "lechuga"]
  }
];

const defaultState = {
  currentMeal: "cena",
  currentDayIndex: 4,
  history: [
    {
      recipeId: "jueves-almuerzo-pechuga-lentejas",
      selectedAt: "Jueves - Almuerzo"
    }
  ]
};

const currentDayElement = document.getElementById("current-day");
const lastMealElement = document.getElementById("last-meal");
const prioritySummaryElement = document.getElementById("priority-summary");
const recipesTitleElement = document.getElementById("recipes-title");
const recipesListElement = document.getElementById("recipes-list");
const historyListElement = document.getElementById("history-list");
const lunchButton = document.getElementById("lunch-button");
const dinnerButton = document.getElementById("dinner-button");
const undoButton = document.getElementById("undo-button");
const resetButton = document.getElementById("reset-button");

let state = loadState();

function loadState() {
  const savedState = window.localStorage.getItem(STORAGE_KEY);
  if (!savedState) {
    return structuredClone(defaultState);
  }

  try {
    const parsed = JSON.parse(savedState);
    return {
      currentMeal: parsed.currentMeal || defaultState.currentMeal,
      currentDayIndex: Number.isInteger(parsed.currentDayIndex) ? parsed.currentDayIndex : defaultState.currentDayIndex,
      history: Array.isArray(parsed.history) ? parsed.history : structuredClone(defaultState.history)
    };
  } catch (error) {
    return structuredClone(defaultState);
  }
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getRecipeById(recipeId) {
  return recipes.find((recipe) => recipe.id === recipeId);
}

function getLastHistoryEntry(offset = 0) {
  return state.history[state.history.length - 1 - offset] || null;
}

function getHistoryIngredients(offset = 0) {
  const entry = getLastHistoryEntry(offset);
  const recipe = entry ? getRecipeById(entry.recipeId) : null;
  return recipe ? recipe.ingredients : [];
}

function nextTurn() {
  if (state.currentMeal === "almuerzo") {
    state.currentMeal = "cena";
    return;
  }

  state.currentMeal = "almuerzo";
  state.currentDayIndex = (state.currentDayIndex + 1) % DAY_NAMES.length;
}

function previousTurn() {
  if (state.currentMeal === "cena") {
    state.currentMeal = "almuerzo";
    return;
  }

  state.currentMeal = "cena";
  state.currentDayIndex = (state.currentDayIndex - 1 + DAY_NAMES.length) % DAY_NAMES.length;
}

function setMeal(meal) {
  state.currentMeal = meal;
  saveState();
  render();
}

function selectRecipe(recipeId) {
  const recipe = getRecipeById(recipeId);
  if (!recipe) {
    return;
  }

  state.history.push({
    recipeId,
    selectedAt: `${DAY_NAMES[state.currentDayIndex]} - ${capitalize(state.currentMeal)}`
  });
  nextTurn();
  saveState();
  render();
}

function undoLastSelection() {
  if (state.history.length <= 1) {
    return;
  }

  state.history.pop();
  previousTurn();
  saveState();
  render();
}

function resetState() {
  state = structuredClone(defaultState);
  saveState();
  render();
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function scoreRecipe(recipe) {
  const lastRecipe = getRecipeById(getLastHistoryEntry()?.recipeId);
  const previousRecipe = getRecipeById(getLastHistoryEntry(1)?.recipeId);
  const recentIngredients = new Set(getHistoryIngredients(0));
  const olderIngredients = new Set(getHistoryIngredients(1));
  const blockedIds = state.history.slice(-BLOCK_TURNS).map((entry) => entry.recipeId);

  let score = 0;
  const reasons = [];

  if (blockedIds.includes(recipe.id)) {
    score += 1000;
    reasons.push("Receta exacta usada hace poco");
  }

  const recentOverlap = recipe.ingredients.filter((ingredient) => recentIngredients.has(ingredient));
  if (recentOverlap.length > 0) {
    score += 180 + recentOverlap.length * 18;
    reasons.push(`Comparte con la ultima comida: ${recentOverlap.join(", ")}`);
  }

  const olderOverlap = recipe.ingredients.filter((ingredient) => olderIngredients.has(ingredient));
  if (olderOverlap.length > 0) {
    score += 60 + olderOverlap.length * 10;
    reasons.push(`Tambien repite ingredientes recientes: ${olderOverlap.join(", ")}`);
  }

  const priorityIngredients = ["pechuga", "lentejas"];
  const delayedIngredients = recipe.ingredients.filter((ingredient) => priorityIngredients.includes(ingredient));
  if (delayedIngredients.length > 0) {
    score += delayedIngredients.length * 35;
    reasons.push(`Va mas al fondo por usar ${delayedIngredients.join(" y ")}`);
  }

  if (lastRecipe && lastRecipe.id === recipe.id) {
    score += 1000;
  }

  if (previousRecipe && previousRecipe.id === recipe.id) {
    score += 200;
  }

  if (reasons.length === 0) {
    reasons.push("No repite lo ultimo y queda arriba");
  }

  let priority = "Alta";
  let priorityClass = "priority-high";

  if (score >= 1000) {
    priority = "Bloqueada";
    priorityClass = "priority-blocked";
  } else if (score >= 180) {
    priority = "Baja";
    priorityClass = "priority-low";
  } else if (score >= 60) {
    priority = "Media";
    priorityClass = "priority-medium";
  }

  return { score, reasons, priority, priorityClass };
}

function getRecipesForCurrentMeal() {
  return recipes
    .filter((recipe) => recipe.meal === state.currentMeal)
    .map((recipe) => ({ recipe, ...scoreRecipe(recipe) }))
    .sort((left, right) => left.score - right.score || left.recipe.title.localeCompare(right.recipe.title));
}

function renderRecipes() {
  const recipeTemplate = document.getElementById("recipe-template");
  const rankedRecipes = getRecipesForCurrentMeal();
  recipesListElement.innerHTML = "";

  rankedRecipes.forEach((entry, index) => {
    const fragment = recipeTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".recipe-card");
    const priorityPill = fragment.querySelector(".priority-pill");
    const mealDay = fragment.querySelector(".meal-day");
    const title = fragment.querySelector(".recipe-title");
    const description = fragment.querySelector(".recipe-description");
    const ingredientsRow = fragment.querySelector(".ingredients-row");
    const reasonRow = fragment.querySelector(".reason-row");
    const button = fragment.querySelector(".select-button");

    priorityPill.textContent = `Prioridad ${entry.priority}`;
    priorityPill.classList.add(entry.priorityClass);
    mealDay.textContent = `${index + 1} de ${rankedRecipes.length}`;
    title.textContent = entry.recipe.title;
    description.textContent = entry.recipe.description;
    button.textContent = entry.priority === "Bloqueada" ? "Bloqueada" : "Elegir";
    button.disabled = entry.priority === "Bloqueada";

    if (entry.priority === "Bloqueada") {
      card.classList.add("blocked");
    }

    entry.recipe.ingredients.forEach((ingredient) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = ingredient;
      ingredientsRow.appendChild(tag);
    });

    entry.reasons.slice(0, 2).forEach((reasonText) => {
      const reason = document.createElement("span");
      reason.className = "reason";
      reason.textContent = reasonText;
      reasonRow.appendChild(reason);
    });

    button.addEventListener("click", () => selectRecipe(entry.recipe.id));
    recipesListElement.appendChild(fragment);
  });
}

function renderHistory() {
  const historyTemplate = document.getElementById("history-template");
  historyListElement.innerHTML = "";

  [...state.history].reverse().forEach((entry) => {
    const recipe = getRecipeById(entry.recipeId);
    if (!recipe) {
      return;
    }

    const fragment = historyTemplate.content.cloneNode(true);
    fragment.querySelector(".history-title").textContent = recipe.title;
    fragment.querySelector(".history-meta").textContent = entry.selectedAt;
    fragment.querySelector(".history-turn").textContent = capitalize(recipe.meal);
    historyListElement.appendChild(fragment);
  });
}

function renderSummary() {
  const lastEntry = getLastHistoryEntry();
  const lastRecipe = lastEntry ? getRecipeById(lastEntry.recipeId) : null;
  const rankedRecipes = getRecipesForCurrentMeal();
  const topRecipe = rankedRecipes.find((entry) => entry.priority !== "Bloqueada");

  currentDayElement.textContent = DAY_NAMES[state.currentDayIndex];
  recipesTitleElement.textContent = capitalize(state.currentMeal);
  lunchButton.classList.toggle("active", state.currentMeal === "almuerzo");
  dinnerButton.classList.toggle("active", state.currentMeal === "cena");

  if (lastRecipe) {
    lastMealElement.textContent = `${lastRecipe.title} (${lastEntry.selectedAt})`;
  } else {
    lastMealElement.textContent = "Todavia no hay historial.";
  }

  if (topRecipe) {
    prioritySummaryElement.textContent = `Arriba esta "${topRecipe.recipe.title}" porque repite menos ingredientes recientes.`;
  } else {
    prioritySummaryElement.textContent = "No hay opciones disponibles para este turno.";
  }
}

function render() {
  renderSummary();
  renderRecipes();
  renderHistory();
}

lunchButton.addEventListener("click", () => setMeal("almuerzo"));
dinnerButton.addEventListener("click", () => setMeal("cena"));
undoButton.addEventListener("click", undoLastSelection);
resetButton.addEventListener("click", resetState);

render();
