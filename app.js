const STORAGE_KEY = "menu-semanal-rotation-v3";
const BLOCK_TURNS = 4;

const builtInRecipes = [
  {
    id: "pechuga-lentejas-huevo-cebolla",
    title: "Pechuga con lentejas, huevo y cebolla",
    ingredients: ["pechuga", "lentejas", "huevo", "cebolla"]
  },
  {
    id: "arroz-pollo-caldo-queso-cebolla",
    title: "Arroz con pollo, caldo, queso y cebolla",
    ingredients: ["arroz", "pollo", "caldo", "queso", "cebolla"]
  },
  {
    id: "tomate-relleno-picadillo-huevo-ajo-cebolla",
    title: "Tomate relleno con picadillo",
    ingredients: ["tomate", "picadillo", "huevo duro", "ajo", "cebolla"]
  },
  {
    id: "costeletas-ensalada-cebolla",
    title: "Costeletas con ensalada de tomate, lechuga y cebolla",
    ingredients: ["costeletas", "tomate", "lechuga", "cebolla", "air fryer"]
  },
  {
    id: "tortilla-arvejas-costeleta",
    title: "Tortilla de arvejas con tomate y costeleta",
    ingredients: ["arvejas", "huevo", "queso", "tomate", "costeletas"]
  },
  {
    id: "arroz-huevo-frito-queso-caldo",
    title: "Arroz con huevo frito, queso y caldo",
    ingredients: ["arroz", "huevo frito", "queso", "caldo de verdura", "sarten"]
  },
  {
    id: "zapallito-revuelto-cebolla",
    title: "Zapallito revuelto con queso y mucha cebolla",
    ingredients: ["zapallito", "queso", "huevo", "cebolla"]
  },
  {
    id: "jardinera-fria-huevos-carne",
    title: "Jardinera fria con huevos y carne",
    ingredients: ["jardinera", "huevo duro", "costeletas", "pechuga"]
  },
  {
    id: "pechuga-rebozada-arroz",
    title: "Pechuga rebozada con arroz",
    ingredients: ["pechuga", "avena", "harina de almendra", "air fryer", "arroz"]
  },
  {
    id: "ensalada-lentejas-carne",
    title: "Ensalada de lentejas con carne",
    ingredients: ["lentejas", "tomate", "cebolla", "huevo duro", "carne"]
  },
  {
    id: "tomate-relleno-ajo",
    title: "Tomate relleno con picadillo, huevo duro y ajo",
    ingredients: ["tomate", "picadillo", "huevo duro", "ajo"]
  },
  {
    id: "omelette-fiambre-queso",
    title: "Omelette de fiambre y queso",
    ingredients: ["omelette", "fiambre", "queso", "lechuga", "tomate"]
  },
  {
    id: "bife-papas-huevo-frito",
    title: "Bife o costeleta con papas y huevo frito",
    ingredients: ["bife", "costeletas", "papas", "air fryer", "huevo frito"]
  },
  {
    id: "arroz-tiritas-costeleta",
    title: "Arroz con caldo, queso y tiritas de costeleta",
    ingredients: ["arroz", "caldo", "queso", "costeletas", "cerdo"]
  },
  {
    id: "tortilla-arvejas-pechuga",
    title: "Tortilla de arvejas con pechuga",
    ingredients: ["arvejas", "huevo", "queso", "pechuga"]
  },
  {
    id: "zapallito-revuelto-clasico",
    title: "Zapallito revuelto clasico",
    ingredients: ["zapallito", "queso", "huevo", "cebolla"]
  },
  {
    id: "jardinera-pechuga",
    title: "Jardinera fria con huevo y pechuga",
    ingredients: ["jardinera", "huevo", "pechuga"]
  },
  {
    id: "arroz-choclo-costeleta",
    title: "Arroz con choclo, queso y costeleta",
    ingredients: ["arroz", "choclo", "queso", "costeletas"]
  },
  {
    id: "costeletas-ensalada-fresca",
    title: "Costeletas con ensalada fresca",
    ingredients: ["costeletas", "tomate", "lechuga", "cebolla"]
  },
  {
    id: "tortilla-arvejas-salsa-carne",
    title: "Tortilla de arvejas con salsa de tomate y carne",
    ingredients: ["arvejas", "huevo", "salsa de tomate", "carne"]
  },
  {
    id: "papas-cebollas-air-fryer",
    title: "Papas y cebollas en Air Fryer con huevos fritos",
    ingredients: ["papas", "cebolla", "especias", "air fryer", "huevo frito"]
  },
  {
    id: "ensalada-lentejas-huevo-duro",
    title: "Ensalada de lentejas con huevo duro",
    ingredients: ["lentejas", "tomate", "cebolla", "huevo duro"]
  },
  {
    id: "omelette-fiambre-queso-ensalada",
    title: "Omelette de fiambre y queso con ensalada",
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
  history: [],
  customRecipes: [],
  pantryIngredients: baseIngredientPool
};

const lastMealElement = document.getElementById("last-meal");
const prioritySummaryElement = document.getElementById("priority-summary");
const recipesListElement = document.getElementById("recipes-list");
const historyListElement = document.getElementById("history-list");
const undoButton = document.getElementById("undo-button");
const resetButton = document.getElementById("reset-button");
const addRecipeForm = document.getElementById("add-recipe-form");
const recipeTitleInput = document.getElementById("recipe-title-input");
const ingredientSelectElement = document.getElementById("ingredient-select");
const selectedIngredientsElement = document.getElementById("selected-ingredients");
const addIngredientButton = document.getElementById("add-ingredient-button");
const clearIngredientsButton = document.getElementById("clear-ingredients-button");
const addRecipeFeedbackElement = document.getElementById("add-recipe-feedback");

let state = loadState();
let recipeDraftIngredients = [];

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

    return {
      history: Array.isArray(parsed.history) ? parsed.history : [],
      customRecipes,
      pantryIngredients: mergeIngredientPools(
        baseIngredientPool,
        Array.isArray(parsed.pantryIngredients) ? parsed.pantryIngredients : [],
        customRecipes.flatMap((recipe) => recipe.ingredients)
      )
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
  const ingredients = Array.isArray(recipe.ingredients)
    ? Array.from(new Set(recipe.ingredients.map(normalizeIngredient).filter(Boolean)))
    : [];

  if (!title || ingredients.length === 0) {
    return null;
  }

  return {
    id: typeof recipe.id === "string" && recipe.id.trim() ? recipe.id.trim() : createRecipeId(title),
    title,
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

function getBlockedIds() {
  return state.history.slice(-BLOCK_TURNS).map((entry) => entry.recipeId);
}

function selectRecipe(recipeId) {
  const recipe = getRecipeById(recipeId);
  if (!recipe) {
    return;
  }

  state.history.push({
    recipeId,
    selectedAt: new Date().toLocaleString("es-AR")
  });

  saveState();
  render();
}

function undoLastSelection() {
  if (state.history.length === 0) {
    return;
  }

  state.history.pop();
  saveState();
  render();
}

function resetState() {
  state = structuredClone(defaultState);
  recipeDraftIngredients = [];
  saveState();
  render();
}

function scoreRecipe(recipe) {
  const recentIngredients = new Set(getHistoryIngredients(0));
  const olderIngredients = new Set(getHistoryIngredients(1));
  const reasons = [];
  let score = 0;

  const recentOverlap = recipe.ingredients.filter((ingredient) => recentIngredients.has(ingredient));
  if (recentOverlap.length > 0) {
    score += 180 + recentOverlap.length * 18;
    reasons.push(`Comparte con la ultima: ${recentOverlap.join(", ")}`);
  }

  const olderOverlap = recipe.ingredients.filter((ingredient) => olderIngredients.has(ingredient));
  if (olderOverlap.length > 0) {
    score += 60 + olderOverlap.length * 10;
    reasons.push(`Tambien se parece a otra reciente: ${olderOverlap.join(", ")}`);
  }

  if (reasons.length === 0) {
    reasons.push("No repite lo ultimo y vuelve a aparecer");
  }

  let priority = "Alta";
  let priorityClass = "priority-high";

  if (score >= 180) {
    priority = "Baja";
    priorityClass = "priority-low";
  } else if (score >= 60) {
    priority = "Media";
    priorityClass = "priority-medium";
  }

  return { score, reasons, priority, priorityClass };
}

function getVisibleRecipes() {
  const blockedIds = new Set(getBlockedIds());

  return buildRecipes()
    .filter((recipe) => !blockedIds.has(recipe.id))
    .map((recipe) => ({ recipe, ...scoreRecipe(recipe) }))
    .sort((left, right) => left.score - right.score || left.recipe.title.localeCompare(right.recipe.title));
}

function renderRecipes() {
  const recipeTemplate = document.getElementById("recipe-template");
  const visibleRecipes = getVisibleRecipes();
  recipesListElement.innerHTML = "";

  if (visibleRecipes.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "No quedan comidas visibles. Deshace una seleccion o espera a que roten.";
    recipesListElement.appendChild(emptyState);
    return;
  }

  visibleRecipes.forEach((entry, index) => {
    const fragment = recipeTemplate.content.cloneNode(true);
    const priorityPill = fragment.querySelector(".priority-pill");
    const mealDay = fragment.querySelector(".meal-day");
    const title = fragment.querySelector(".recipe-title");
    const ingredientsRow = fragment.querySelector(".ingredients-row");
    const reasonRow = fragment.querySelector(".reason-row");
    const button = fragment.querySelector(".select-button");

    priorityPill.textContent = `Prioridad ${entry.priority}`;
    priorityPill.classList.add(entry.priorityClass);
    mealDay.textContent = `${index + 1} de ${visibleRecipes.length}`;
    title.textContent = entry.recipe.title;
    button.textContent = "Elegir";

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

  if (state.history.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "Todavia no elegiste ninguna comida.";
    historyListElement.appendChild(emptyState);
    return;
  }

  [...state.history].reverse().forEach((entry, index) => {
    const recipe = getRecipeById(entry.recipeId);
    if (!recipe) {
      return;
    }

    const fragment = historyTemplate.content.cloneNode(true);
    fragment.querySelector(".history-title").textContent = recipe.title;
    fragment.querySelector(".history-meta").textContent = entry.selectedAt;
    fragment.querySelector(".history-turn").textContent = `Hace ${index} comidas`;
    historyListElement.appendChild(fragment);
  });
}

function renderSummary() {
  const lastEntry = getLastHistoryEntry();
  const lastRecipe = lastEntry ? getRecipeById(lastEntry.recipeId) : null;
  const visibleRecipes = getVisibleRecipes();
  const hiddenCount = getBlockedIds().length;

  if (lastRecipe) {
    lastMealElement.textContent = `${lastRecipe.title} (${lastEntry.selectedAt})`;
  } else {
    lastMealElement.textContent = "Todavia no hay historial.";
  }

  if (visibleRecipes[0]) {
    prioritySummaryElement.textContent = `Hay ${visibleRecipes.length} comidas visibles y ${hiddenCount} ocultas por rotacion.`;
  } else {
    prioritySummaryElement.textContent = "Todas las comidas quedaron ocultas temporalmente por las ultimas selecciones.";
  }
}

function renderIngredientSelect() {
  ingredientSelectElement.innerHTML = "";

  state.pantryIngredients.forEach((ingredient) => {
    const option = document.createElement("option");
    option.value = ingredient;
    option.textContent = prettifyIngredient(ingredient);
    ingredientSelectElement.appendChild(option);
  });
}

function renderSelectedIngredients() {
  selectedIngredientsElement.innerHTML = "";

  if (recipeDraftIngredients.length === 0) {
    const helper = document.createElement("p");
    helper.className = "form-helper";
    helper.textContent = "Todavia no agregaste ingredientes a esta comida.";
    selectedIngredientsElement.appendChild(helper);
    return;
  }

  recipeDraftIngredients.forEach((ingredient) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "ingredient-chip selected";
    chip.textContent = `${prettifyIngredient(ingredient)} x`;
    chip.addEventListener("click", () => removeDraftIngredient(ingredient));
    selectedIngredientsElement.appendChild(chip);
  });
}

function addDraftIngredient() {
  const ingredient = normalizeIngredient(ingredientSelectElement.value);
  if (!ingredient || recipeDraftIngredients.includes(ingredient)) {
    return;
  }

  recipeDraftIngredients.push(ingredient);
  renderSelectedIngredients();
}

function removeDraftIngredient(ingredient) {
  recipeDraftIngredients = recipeDraftIngredients.filter((item) => item !== ingredient);
  renderSelectedIngredients();
}

function clearDraftIngredients() {
  recipeDraftIngredients = [];
  renderSelectedIngredients();
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
  if (!title || recipeDraftIngredients.length === 0) {
    addRecipeFeedbackElement.textContent = "Escribi un titulo y agrega al menos un ingrediente.";
    addRecipeFeedbackElement.dataset.tone = "error";
    return;
  }

  const recipe = {
    id: createRecipeId(title),
    title,
    ingredients: [...recipeDraftIngredients]
  };

  state.customRecipes.push(recipe);
  state.pantryIngredients = mergeIngredientPools(state.pantryIngredients, recipe.ingredients);
  saveState();

  addRecipeForm.reset();
  recipeDraftIngredients = [];
  addRecipeFeedbackElement.textContent = `Se agrego "${title}" a la lista.`;
  addRecipeFeedbackElement.dataset.tone = "success";
  render();
}

function render() {
  renderSummary();
  renderRecipes();
  renderHistory();
  renderIngredientSelect();
  renderSelectedIngredients();
}

undoButton.addEventListener("click", undoLastSelection);
resetButton.addEventListener("click", resetState);
addRecipeForm.addEventListener("submit", addRecipe);
addIngredientButton.addEventListener("click", addDraftIngredient);
clearIngredientsButton.addEventListener("click", clearDraftIngredients);

render();
