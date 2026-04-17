const STORAGE_KEY = "menu-semanal-rotation-v2";
const BLOCK_TURNS = 4;
const DAY_NAMES = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const PRIORITY_INGREDIENTS = ["pechuga", "lentejas"];

const builtInRecipes = [
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
    description: "Arroz de cinco punados con pollo, caldo, queso y media cebolla.",
    ingredients: ["arroz", "pollo", "caldo", "queso", "cebolla"]
  },
  {
    id: "jueves-cena-tomate-relleno-picadillo",
    meal: "cena",
    title: "Tomate relleno con picadillo",
    description: "Tomate relleno frio con picadillo, huevo duro, ajo y media cebolla.",
    ingredients: ["tomate", "picadillo", "huevo duro", "ajo", "cebolla"]
  },
  {
    id: "jueves-cena-costeletas-ensalada",
    meal: "cena",
    title: "Costeletas con ensalada de tomate, lechuga y cebolla",
    description: "Costeletas en Air Fryer con ensalada de tomate, lechuga y una cebolla y media.",
    ingredients: ["costeletas", "tomate", "lechuga", "cebolla", "air fryer"]
  },
  {
    id: "viernes-almuerzo-tortilla-arvejas-costeleta",
    meal: "almuerzo",
    title: "Tortilla de arvejas con tomate y costeleta",
    description: "Tortilla de arvejas con una lata entera, tres huevos, queso derretido, rodajas de tomate arriba y una costeleta.",
    ingredients: ["arvejas", "huevo", "queso", "tomate", "costeletas"]
  },
  {
    id: "viernes-almuerzo-arroz-huevo-frito",
    meal: "almuerzo",
    title: "Arroz con huevo frito, queso y caldo",
    description: "Arroz con huevo frito en sarten pintada, queso y caldo de verdura.",
    ingredients: ["arroz", "huevo frito", "queso", "caldo de verdura", "sarten"]
  },
  {
    id: "viernes-cena-zapallito-revuelto",
    meal: "cena",
    title: "Zapallito revuelto con queso y mucha cebolla",
    description: "Zapallito revuelto con queso, huevo y una cebolla y media.",
    ingredients: ["zapallito", "queso", "huevo", "cebolla"]
  },
  {
    id: "viernes-cena-jardinera-fria",
    meal: "cena",
    title: "Jardinera fria con huevos y carne",
    description: "Una lata de jardinera fria con dos huevos duros y una costeleta o pechuga.",
    ingredients: ["jardinera", "huevo duro", "costeletas", "pechuga"]
  },
  {
    id: "sabado-almuerzo-pechuga-rebozada-arroz",
    meal: "almuerzo",
    title: "Pechuga rebozada con arroz",
    description: "Pechuga rebozada con avena y harina de almendra en Air Fryer, servida con arroz.",
    ingredients: ["pechuga", "avena", "harina de almendra", "air fryer", "arroz"]
  },
  {
    id: "sabado-almuerzo-ensalada-lentejas-carne",
    meal: "almuerzo",
    title: "Ensalada de lentejas con carne",
    description: "Ensalada de lentejas con una lata entera, tomate, una cebolla, dos huevos duros y carne.",
    ingredients: ["lentejas", "tomate", "cebolla", "huevo duro", "carne"]
  },
  {
    id: "sabado-cena-tomate-relleno",
    meal: "cena",
    title: "Tomate relleno con picadillo, huevo duro y ajo",
    description: "Tomate relleno frio con picadillo, huevo duro y ajo.",
    ingredients: ["tomate", "picadillo", "huevo duro", "ajo"]
  },
  {
    id: "sabado-cena-omelette-fiambre-queso",
    meal: "cena",
    title: "Omelette de fiambre y queso",
    description: "Omelette de fiambre y queso con ensalada de lechuga y tomate.",
    ingredients: ["omelette", "fiambre", "queso", "lechuga", "tomate"]
  },
  {
    id: "domingo-almuerzo-bife-papas-huevo",
    meal: "almuerzo",
    title: "Bife o costeleta con papas y huevo frito",
    description: "Bife o costeleta con papas fritas en Air Fryer y huevo frito.",
    ingredients: ["bife", "costeletas", "papas", "air fryer", "huevo frito"]
  },
  {
    id: "domingo-almuerzo-arroz-costeleta",
    meal: "almuerzo",
    title: "Arroz con caldo, queso y tiritas de costeleta",
    description: "Arroz con caldo, queso y tiritas de costeleta de cerdo.",
    ingredients: ["arroz", "caldo", "queso", "costeletas", "cerdo"]
  },
  {
    id: "domingo-cena-tortilla-arvejas-pechuga",
    meal: "cena",
    title: "Tortilla de arvejas con pechuga",
    description: "Tortilla de arvejas con una lata entera, tres huevos, queso arriba y pechuga.",
    ingredients: ["arvejas", "huevo", "queso", "pechuga"]
  },
  {
    id: "domingo-cena-zapallito-revuelto",
    meal: "cena",
    title: "Zapallito revuelto clasico",
    description: "Zapallito revuelto con queso, huevo y una cebolla y media.",
    ingredients: ["zapallito", "queso", "huevo", "cebolla"]
  },
  {
    id: "lunes-almuerzo-jardinera-pechuga",
    meal: "almuerzo",
    title: "Jardinera fria con huevo y pechuga",
    description: "Jardinera fria con huevo y pechuga a la plancha.",
    ingredients: ["jardinera", "huevo", "pechuga"]
  },
  {
    id: "lunes-almuerzo-arroz-choclo-costeleta",
    meal: "almuerzo",
    title: "Arroz con choclo, queso y costeleta",
    description: "Arroz con medio choclo en lata, queso y costeleta.",
    ingredients: ["arroz", "choclo", "queso", "costeletas"]
  },
  {
    id: "lunes-cena-tomate-relleno",
    meal: "cena",
    title: "Tomate relleno con picadillo y ajo",
    description: "Tomate relleno con picadillo, huevo duro y ajo.",
    ingredients: ["tomate", "picadillo", "huevo duro", "ajo"]
  },
  {
    id: "lunes-cena-costeletas-ensalada",
    meal: "cena",
    title: "Costeletas con ensalada fresca",
    description: "Costeletas con ensalada de tomate, lechuga y cebolla.",
    ingredients: ["costeletas", "tomate", "lechuga", "cebolla"]
  },
  {
    id: "martes-almuerzo-tortilla-arvejas-carne",
    meal: "almuerzo",
    title: "Tortilla de arvejas con salsa de tomate y carne",
    description: "Tortilla de arvejas con una lata entera, tres huevos, salsa de tomate arriba y carne.",
    ingredients: ["arvejas", "huevo", "salsa de tomate", "carne"]
  },
  {
    id: "martes-almuerzo-papas-cebollas-air-fryer",
    meal: "almuerzo",
    title: "Papas y cebollas en Air Fryer con huevos fritos",
    description: "Papas y cebollas con especias en Air Fryer, acompanadas con dos huevos fritos.",
    ingredients: ["papas", "cebolla", "especias", "air fryer", "huevo frito"]
  },
  {
    id: "martes-cena-ensalada-lentejas",
    meal: "cena",
    title: "Ensalada de lentejas con huevo duro",
    description: "Ensalada de lentejas con una lata entera, tomate, cebolla y huevo duro.",
    ingredients: ["lentejas", "tomate", "cebolla", "huevo duro"]
  },
  {
    id: "martes-cena-omelette-fiambre-queso",
    meal: "cena",
    title: "Omelette de fiambre y queso con ensalada",
    description: "Omelette de fiambre y queso con ensalada de tomate y lechuga.",
    ingredients: ["omelette", "fiambre", "queso", "tomate", "lechuga"]
  }
];

const baseIngredientPool = Array.from(
  new Set(
    builtInRecipes
      .flatMap((recipe) => recipe.ingredients)
      .map(normalizeIngredient)
      .filter(Boolean)
  )
).sort((left, right) => left.localeCompare(right));

const defaultState = {
  currentMeal: "cena",
  currentDayIndex: 4,
  history: [
    {
      recipeId: "jueves-almuerzo-pechuga-lentejas",
      selectedAt: "Jueves - Almuerzo"
    }
  ],
  customRecipes: [],
  pantryIngredients: baseIngredientPool
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
const addRecipeForm = document.getElementById("add-recipe-form");
const recipeTitleInput = document.getElementById("recipe-title-input");
const recipeMealSelect = document.getElementById("recipe-meal-input");
const recipeDescriptionInput = document.getElementById("recipe-description-input");
const recipeIngredientsInput = document.getElementById("recipe-ingredients-input");
const ingredientSuggestionsElement = document.getElementById("ingredient-suggestions");
const addRecipeFeedbackElement = document.getElementById("add-recipe-feedback");

let state = loadState();

function normalizeIngredient(value) {
  return value.trim().toLowerCase();
}

function prettifyIngredient(value) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

function buildRecipes() {
  return [...builtInRecipes, ...state.customRecipes];
}

function loadState() {
  const savedState = window.localStorage.getItem(STORAGE_KEY);

  if (!savedState) {
    return structuredClone(defaultState);
  }

  try {
    const parsed = JSON.parse(savedState);
    const customRecipes = Array.isArray(parsed.customRecipes)
      ? parsed.customRecipes.map(sanitizeRecipe).filter(Boolean)
      : [];
    const pantryIngredients = mergeIngredientPools(
      baseIngredientPool,
      Array.isArray(parsed.pantryIngredients) ? parsed.pantryIngredients : [],
      customRecipes.flatMap((recipe) => recipe.ingredients)
    );

    return {
      currentMeal: parsed.currentMeal === "almuerzo" ? "almuerzo" : "cena",
      currentDayIndex: Number.isInteger(parsed.currentDayIndex) ? parsed.currentDayIndex : defaultState.currentDayIndex,
      history: Array.isArray(parsed.history) ? parsed.history : structuredClone(defaultState.history),
      customRecipes,
      pantryIngredients
    };
  } catch (error) {
    return structuredClone(defaultState);
  }
}

function sanitizeRecipe(recipe) {
  if (!recipe || typeof recipe !== "object") {
    return null;
  }

  const title = typeof recipe.title === "string" ? recipe.title.trim() : "";
  const meal = recipe.meal === "almuerzo" ? "almuerzo" : recipe.meal === "cena" ? "cena" : "";
  const description = typeof recipe.description === "string" ? recipe.description.trim() : "";
  const ingredients = Array.isArray(recipe.ingredients)
    ? Array.from(new Set(recipe.ingredients.map(normalizeIngredient).filter(Boolean)))
    : [];

  if (!title || !meal || !description || ingredients.length === 0) {
    return null;
  }

  return {
    id: typeof recipe.id === "string" && recipe.id.trim() ? recipe.id.trim() : createRecipeId(title),
    meal,
    title,
    description,
    ingredients
  };
}

function mergeIngredientPools(...ingredientLists) {
  return Array.from(
    new Set(
      ingredientLists
        .flat()
        .map((ingredient) => normalizeIngredient(String(ingredient)))
        .filter(Boolean)
    )
  ).sort((left, right) => left.localeCompare(right));
}

function saveState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getRecipeById(recipeId) {
  return buildRecipes().find((recipe) => recipe.id === recipeId);
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

  const delayedIngredients = recipe.ingredients.filter((ingredient) => PRIORITY_INGREDIENTS.includes(ingredient));
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
  return buildRecipes()
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

function renderIngredientSuggestions() {
  ingredientSuggestionsElement.innerHTML = "";

  state.pantryIngredients.forEach((ingredient) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ingredient-chip";
    button.textContent = prettifyIngredient(ingredient);
    button.addEventListener("click", () => appendIngredientToInput(ingredient));
    ingredientSuggestionsElement.appendChild(button);
  });
}

function appendIngredientToInput(ingredient) {
  const currentIngredients = parseIngredientInput(recipeIngredientsInput.value);
  if (currentIngredients.includes(ingredient)) {
    return;
  }

  currentIngredients.push(ingredient);
  recipeIngredientsInput.value = currentIngredients.join(", ");
  recipeIngredientsInput.focus();
}

function parseIngredientInput(rawValue) {
  return Array.from(
    new Set(
      rawValue
        .split(",")
        .map(normalizeIngredient)
        .filter(Boolean)
    )
  );
}

function createRecipeId(title) {
  return `manual-${title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}-${Date.now()}`;
}

function addRecipe(event) {
  event.preventDefault();

  const title = recipeTitleInput.value.trim();
  const meal = recipeMealSelect.value;
  const description = recipeDescriptionInput.value.trim();
  const ingredients = parseIngredientInput(recipeIngredientsInput.value);

  if (!title || !description || ingredients.length === 0) {
    addRecipeFeedbackElement.textContent = "Completa titulo, descripcion e ingredientes para guardar la receta.";
    addRecipeFeedbackElement.dataset.tone = "error";
    return;
  }

  const recipe = {
    id: createRecipeId(title),
    title,
    meal,
    description,
    ingredients
  };

  state.customRecipes.push(recipe);
  state.pantryIngredients = mergeIngredientPools(state.pantryIngredients, ingredients);
  saveState();

  addRecipeForm.reset();
  addRecipeFeedbackElement.textContent = `Se agrego "${title}" y ya entra en la rotacion de ${meal}.`;
  addRecipeFeedbackElement.dataset.tone = "success";
  render();
}

function render() {
  renderSummary();
  renderRecipes();
  renderHistory();
  renderIngredientSuggestions();
}

lunchButton.addEventListener("click", () => setMeal("almuerzo"));
dinnerButton.addEventListener("click", () => setMeal("cena"));
undoButton.addEventListener("click", undoLastSelection);
resetButton.addEventListener("click", resetState);
addRecipeForm.addEventListener("submit", addRecipe);

render();
