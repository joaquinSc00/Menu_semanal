const STORAGE_KEY = "menu-semanal-rotation-v4";
const CURRENT_USER_KEY = "menu-semanal-current-user";
const MENU_REF_PATH = "menuSemanal/sharedState";
const BLOCK_TURNS = 4;
const USERS = ["SANTI", "JOAQUIN"];

const builtInRecipes = [
  { id: "pechuga-lentejas-huevo-cebolla", title: "Pechuga con lentejas, huevo y cebolla", ingredients: ["pechuga", "lentejas", "huevo", "cebolla"] },
  { id: "arroz-pollo-caldo-queso-cebolla", title: "Arroz con pollo, caldo, queso y cebolla", ingredients: ["arroz", "pollo", "caldo", "queso", "cebolla"] },
  { id: "tomate-relleno-picadillo-huevo-ajo-cebolla", title: "Tomate relleno con picadillo", ingredients: ["tomate", "picadillo", "huevo duro", "ajo", "cebolla"] },
  { id: "costeletas-ensalada-cebolla", title: "Costeletas con ensalada de tomate, lechuga y cebolla", ingredients: ["costeletas", "tomate", "lechuga", "cebolla", "air fryer"] },
  { id: "tortilla-arvejas-costeleta", title: "Tortilla de arvejas con tomate y costeleta", ingredients: ["arvejas", "huevo", "queso", "tomate", "costeletas"] },
  { id: "arroz-huevo-frito-queso-caldo", title: "Arroz con huevo frito, queso y caldo", ingredients: ["arroz", "huevo frito", "queso", "caldo de verdura", "sarten"] },
  { id: "zapallito-revuelto-cebolla", title: "Zapallito revuelto con queso y mucha cebolla", ingredients: ["zapallito", "queso", "huevo", "cebolla"] },
  { id: "jardinera-fria-huevos-carne", title: "Jardinera fria con huevos y carne", ingredients: ["jardinera", "huevo duro", "costeletas", "pechuga"] },
  { id: "pechuga-rebozada-arroz", title: "Pechuga rebozada con arroz", ingredients: ["pechuga", "avena", "harina de almendra", "air fryer", "arroz"] },
  { id: "ensalada-lentejas-carne", title: "Ensalada de lentejas con carne", ingredients: ["lentejas", "tomate", "cebolla", "huevo duro", "carne"] },
  { id: "tomate-relleno-ajo", title: "Tomate relleno con picadillo, huevo duro y ajo", ingredients: ["tomate", "picadillo", "huevo duro", "ajo"] },
  { id: "omelette-fiambre-queso", title: "Omelette de fiambre y queso", ingredients: ["omelette", "fiambre", "queso", "lechuga", "tomate"] },
  { id: "bife-papas-huevo-frito", title: "Bife o costeleta con papas y huevo frito", ingredients: ["bife", "costeletas", "papas", "air fryer", "huevo frito"] },
  { id: "arroz-tiritas-costeleta", title: "Arroz con caldo, queso y tiritas de costeleta", ingredients: ["arroz", "caldo", "queso", "costeletas", "cerdo"] },
  { id: "tortilla-arvejas-pechuga", title: "Tortilla de arvejas con pechuga", ingredients: ["arvejas", "huevo", "queso", "pechuga"] },
  { id: "zapallito-revuelto-clasico", title: "Zapallito revuelto clasico", ingredients: ["zapallito", "queso", "huevo", "cebolla"] },
  { id: "jardinera-pechuga", title: "Jardinera fria con huevo y pechuga", ingredients: ["jardinera", "huevo", "pechuga"] },
  { id: "arroz-choclo-costeleta", title: "Arroz con choclo, queso y costeleta", ingredients: ["arroz", "choclo", "queso", "costeletas"] },
  { id: "costeletas-ensalada-fresca", title: "Costeletas con ensalada fresca", ingredients: ["costeletas", "tomate", "lechuga", "cebolla"] },
  { id: "tortilla-arvejas-salsa-carne", title: "Tortilla de arvejas con salsa de tomate y carne", ingredients: ["arvejas", "huevo", "salsa de tomate", "carne"] },
  { id: "papas-cebollas-air-fryer", title: "Papas y cebollas en Air Fryer con huevos fritos", ingredients: ["papas", "cebolla", "especias", "air fryer", "huevo frito"] },
  { id: "ensalada-lentejas-huevo-duro", title: "Ensalada de lentejas con huevo duro", ingredients: ["lentejas", "tomate", "cebolla", "huevo duro"] },
  { id: "omelette-fiambre-queso-ensalada", title: "Omelette de fiambre y queso con ensalada", ingredients: ["omelette", "fiambre", "queso", "tomate", "lechuga"] }
];

const builtInExpenses = [
  { id: "expense-2026-02-05-muslo-papas", amount: 6000, description: "Muslo y papas", paidBy: "JOAQUIN", createdAt: "2026-02-05T12:00:00-03:00" },
  { id: "expense-2026-02-10-queso-salsa", amount: 5000, description: "Queso y salsa", paidBy: "SANTI", createdAt: "2026-02-10T12:00:00-03:00" },
  { id: "expense-2026-02-10-medallones", amount: 7000, description: "Medallones", paidBy: "SANTI", createdAt: "2026-02-10T12:05:00-03:00" },
  { id: "expense-2026-02-10-papas-coca", amount: 7700, description: "Papas y coca", paidBy: "JOAQUIN", createdAt: "2026-02-10T12:10:00-03:00" },
  { id: "expense-2026-02-27-carrefour", amount: 19000, description: "Carrefour", paidBy: "JOAQUIN", createdAt: "2026-02-27T12:00:00-03:00" },
  { id: "expense-2026-02-27-huevos", amount: 7200, description: "Huevos", paidBy: "JOAQUIN", createdAt: "2026-02-27T12:05:00-03:00" },
  { id: "expense-2026-02-27-verduras", amount: 7000, description: "Verduras", paidBy: "JOAQUIN", createdAt: "2026-02-27T12:10:00-03:00" },
  { id: "expense-2026-03-05-fiambre", amount: 7000, description: "Fiambre", paidBy: "JOAQUIN", createdAt: "2026-03-05T12:00:00-03:00" },
  { id: "expense-2026-03-06-carrefour", amount: 17000, description: "Carrefour", paidBy: "SANTI", createdAt: "2026-03-06T12:00:00-03:00" },
  { id: "expense-2026-03-12-carrefour-a", amount: 24000, description: "Carrefour", paidBy: "JOAQUIN", createdAt: "2026-03-12T12:00:00-03:00" },
  { id: "expense-2026-03-12-verduras", amount: 6500, description: "Verduras", paidBy: "JOAQUIN", createdAt: "2026-03-12T12:05:00-03:00" },
  { id: "expense-2026-03-12-carrefour-desc", amount: 24000, description: "Carrefour (descontado)", paidBy: "JOAQUIN", createdAt: "2026-03-12T12:10:00-03:00" },
  { id: "expense-2026-03-12-buenos-dias", amount: 15000, description: "Buenos Dias", paidBy: "SANTI", createdAt: "2026-03-12T12:15:00-03:00" },
  { id: "expense-2026-03-31-supremas-verduras", amount: 12000, description: "Supremas y verduras", paidBy: "JOAQUIN", createdAt: "2026-03-31T12:00:00-03:00" },
  { id: "expense-2026-03-31-coca-hamburguesas-papas", amount: 10000, description: "Coca, hamburguesas y papas", paidBy: "JOAQUIN", createdAt: "2026-03-31T12:05:00-03:00" },
  { id: "expense-2026-04-08-emi", amount: 6400, description: "Emi", paidBy: "SANTI", createdAt: "2026-04-08T12:00:00-03:00" },
  { id: "expense-2026-04-08-fiambre", amount: 6700, description: "Fiambre", paidBy: "SANTI", createdAt: "2026-04-08T12:05:00-03:00" },
  { id: "expense-2026-04-08-papa-banana-naranja", amount: 9900, description: "Papa, banana y naranja", paidBy: "SANTI", createdAt: "2026-04-08T12:10:00-03:00" },
  { id: "expense-2026-04-08-buenos-dias", amount: 9000, description: "Buenos Dias", paidBy: "JOAQUIN", createdAt: "2026-04-08T12:15:00-03:00" },
  { id: "expense-2026-04-08-carrefour", amount: 9000, description: "Carrefour", paidBy: "JOAQUIN", createdAt: "2026-04-08T12:20:00-03:00" },
  { id: "expense-2026-04-09-carrefour-buenos-dias", amount: 40000, description: "Carrefour y Buenos Dias", paidBy: "SANTI", createdAt: "2026-04-09T12:00:00-03:00" },
  { id: "expense-2026-04-14-huevos", amount: 6700, description: "Huevos", paidBy: "SANTI", createdAt: "2026-04-14T12:00:00-03:00" }
];

const baseIngredientPool = Array.from(
  new Set(builtInRecipes.flatMap((recipe) => recipe.ingredients).map(normalizeIngredient).filter(Boolean))
).sort((left, right) => left.localeCompare(right));

const defaultState = {
  history: [],
  customRecipes: [],
  pantryIngredients: baseIngredientPool,
  expenses: builtInExpenses
};

const identitySantiButton = document.getElementById("identity-santi");
const identityJoaquinButton = document.getElementById("identity-joaquin");
const currentUserLabelElement = document.getElementById("current-user-label");
const lastMealElement = document.getElementById("last-meal");
const prioritySummaryElement = document.getElementById("priority-summary");
const syncStatusElement = document.getElementById("sync-status");
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
const addExpenseForm = document.getElementById("add-expense-form");
const expenseAmountInput = document.getElementById("expense-amount-input");
const expenseDescriptionInput = document.getElementById("expense-description-input");
const addExpenseFeedbackElement = document.getElementById("add-expense-feedback");
const spentSantiElement = document.getElementById("spent-santi");
const spentJoaquinElement = document.getElementById("spent-joaquin");
const expenseBalanceSummaryElement = document.getElementById("expense-balance-summary");
const expensesListElement = document.getElementById("expenses-list");
const shoppingPreviewElement = document.getElementById("shopping-preview");

let state = loadCachedState();
let currentUser = loadCurrentUser();
let recipeDraftIngredients = [];
let menuRef = null;
let isHydratedFromRemote = false;

function normalizeIngredient(value) {
  return value.trim().toLowerCase();
}

function formatCurrency(value) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 2
  }).format(value || 0);
}

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString("es-AR");
}

function prettifyIngredient(value) {
  return value
    .split(" ")
    .filter(Boolean)
    .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
    .join(" ");
}

function setSyncStatus(message, tone = "default") {
  syncStatusElement.textContent = message;
  if (tone === "default") {
    delete syncStatusElement.dataset.tone;
    return;
  }
  syncStatusElement.dataset.tone = tone;
}

function loadCurrentUser() {
  const savedUser = window.localStorage.getItem(CURRENT_USER_KEY);
  return USERS.includes(savedUser) ? savedUser : "";
}

function setCurrentUser(user) {
  currentUser = user;
  window.localStorage.setItem(CURRENT_USER_KEY, user);
  renderIdentity();
}

function buildRecipes() {
  return [...builtInRecipes, ...state.customRecipes];
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

function sanitizeExpense(expense) {
  if (!expense || typeof expense !== "object") {
    return null;
  }

  const amount = Number(expense.amount);
  const description = typeof expense.description === "string" ? expense.description.trim() : "";
  const paidBy = typeof expense.paidBy === "string" ? expense.paidBy.trim().toUpperCase() : "";

  if (!description || !Number.isFinite(amount) || amount <= 0 || !USERS.includes(paidBy)) {
    return null;
  }

  return {
    id: typeof expense.id === "string" && expense.id.trim() ? expense.id.trim() : `expense-${Date.now()}`,
    amount,
    description,
    paidBy,
    createdAt: typeof expense.createdAt === "string" ? expense.createdAt : new Date().toISOString()
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

function sanitizeState(rawState) {
  const customRecipes = Array.isArray(rawState?.customRecipes)
    ? rawState.customRecipes.map(sanitizeRecipe).filter(Boolean)
    : [];
  const expenses = mergeExpenses(
    builtInExpenses,
    Array.isArray(rawState?.expenses) ? rawState.expenses.map(sanitizeExpense).filter(Boolean) : []
  );

  return {
    history: Array.isArray(rawState?.history)
      ? rawState.history
          .filter((entry) => entry && typeof entry.recipeId === "string")
          .map((entry) => ({
            recipeId: entry.recipeId,
            selectedAt: typeof entry.selectedAt === "string" ? entry.selectedAt : new Date().toISOString()
          }))
      : [],
    customRecipes,
    pantryIngredients: mergeIngredientPools(
      baseIngredientPool,
      Array.isArray(rawState?.pantryIngredients) ? rawState.pantryIngredients : [],
      customRecipes.flatMap((recipe) => recipe.ingredients)
    ),
    expenses
  };
}

function mergeExpenses(...expenseLists) {
  const expenseMap = new Map();

  expenseLists
    .flat()
    .filter(Boolean)
    .forEach((expense) => {
      expenseMap.set(expense.id, expense);
    });

  return [...expenseMap.values()].sort((left, right) => left.createdAt.localeCompare(right.createdAt));
}

function loadCachedState() {
  const savedState = window.localStorage.getItem(STORAGE_KEY);
  if (!savedState) {
    return structuredClone(defaultState);
  }

  try {
    return sanitizeState(JSON.parse(savedState));
  } catch (error) {
    return structuredClone(defaultState);
  }
}

function persistLocalState() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function persistState() {
  persistLocalState();
  if (!menuRef) {
    return Promise.resolve();
  }

  return menuRef.set(state)
    .then(() => {
      setSyncStatus("Datos sincronizados entre dispositivos.");
    })
    .catch(() => {
      setSyncStatus("Se guardo solo en este dispositivo. Revisa Firebase o tu conexion.", "warning");
    });
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
  if (!getRecipeById(recipeId)) {
    return;
  }

  state.history.push({
    recipeId,
    selectedAt: new Date().toISOString()
  });

  render();
  void persistState();
}

function undoLastSelection() {
  if (state.history.length === 0) {
    return;
  }

  state.history.pop();
  render();
  void persistState();
}

function resetState() {
  state.history = [];
  state.customRecipes = [];
  state.pantryIngredients = [...baseIngredientPool];
  state.expenses = [...builtInExpenses];
  recipeDraftIngredients = [];
  render();
  void persistState();
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

function renderIdentity() {
  identitySantiButton.classList.toggle("active", currentUser === "SANTI");
  identityJoaquinButton.classList.toggle("active", currentUser === "JOAQUIN");
  currentUserLabelElement.textContent = currentUser
    ? `Este dispositivo esta usando la identidad ${currentUser}.`
    : "Todavia no elegiste usuario en este dispositivo.";
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
    fragment.querySelector(".priority-pill").textContent = `Prioridad ${entry.priority}`;
    fragment.querySelector(".priority-pill").classList.add(entry.priorityClass);
    fragment.querySelector(".meal-day").textContent = `${index + 1} de ${visibleRecipes.length}`;
    fragment.querySelector(".recipe-title").textContent = entry.recipe.title;

    const ingredientsRow = fragment.querySelector(".ingredients-row");
    const reasonRow = fragment.querySelector(".reason-row");
    const button = fragment.querySelector(".select-button");

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
    fragment.querySelector(".history-meta").textContent = formatDate(entry.selectedAt);
    fragment.querySelector(".history-turn").textContent = `Hace ${index} comidas`;
    historyListElement.appendChild(fragment);
  });
}

function renderMenuSummary() {
  const lastEntry = getLastHistoryEntry();
  const lastRecipe = lastEntry ? getRecipeById(lastEntry.recipeId) : null;
  const visibleRecipes = getVisibleRecipes();
  const hiddenCount = Math.min(getBlockedIds().length, buildRecipes().length);

  lastMealElement.textContent = lastRecipe
    ? `${lastRecipe.title} (${formatDate(lastEntry.selectedAt)})`
    : "Todavia no hay historial.";

  prioritySummaryElement.textContent = visibleRecipes[0]
    ? `Hay ${visibleRecipes.length} comidas visibles y ${hiddenCount} ocultas por rotacion.`
    : "Todas las comidas quedaron ocultas temporalmente por las ultimas selecciones.";
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
  return `manual-${title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}-${Date.now()}`;
}

function addRecipe(event) {
  event.preventDefault();

  const title = recipeTitleInput.value.trim();
  if (!title || recipeDraftIngredients.length === 0) {
    addRecipeFeedbackElement.textContent = "Escribi un titulo y agrega al menos un ingrediente.";
    addRecipeFeedbackElement.dataset.tone = "error";
    return;
  }

  state.customRecipes.push({
    id: createRecipeId(title),
    title,
    ingredients: [...recipeDraftIngredients]
  });
  state.pantryIngredients = mergeIngredientPools(state.pantryIngredients, recipeDraftIngredients);
  recipeDraftIngredients = [];
  addRecipeForm.reset();
  addRecipeFeedbackElement.textContent = `Se agrego "${title}" a la lista compartida.`;
  delete addRecipeFeedbackElement.dataset.tone;
  render();
  void persistState();
}

function addExpense(event) {
  event.preventDefault();

  const amount = Number(expenseAmountInput.value);
  const description = expenseDescriptionInput.value.trim();

  if (!currentUser) {
    addExpenseFeedbackElement.textContent = "Primero elegi si sos SANTI o JOAQUIN arriba.";
    addExpenseFeedbackElement.dataset.tone = "error";
    return;
  }

  if (!description || !Number.isFinite(amount) || amount <= 0) {
    addExpenseFeedbackElement.textContent = "Carga un monto valido y una descripcion corta.";
    addExpenseFeedbackElement.dataset.tone = "error";
    return;
  }

  state.expenses.push({
    id: `expense-${Date.now()}`,
    amount,
    description,
    paidBy: currentUser,
    createdAt: new Date().toISOString()
  });
  state.expenses = mergeExpenses(state.expenses);

  addExpenseForm.reset();
  addExpenseFeedbackElement.textContent = `Gasto guardado para ${currentUser}.`;
  delete addExpenseFeedbackElement.dataset.tone;
  render();
  void persistState();
}

function getExpenseTotals() {
  return state.expenses.reduce(
    (totals, expense) => {
      totals[expense.paidBy] += expense.amount;
      totals.total += expense.amount;
      return totals;
    },
    { SANTI: 0, JOAQUIN: 0, total: 0 }
  );
}

function renderExpenses() {
  const expenseTemplate = document.getElementById("expense-template");
  expensesListElement.innerHTML = "";

  if (state.expenses.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "Todavia no hay gastos cargados.";
    expensesListElement.appendChild(emptyState);
    return;
  }

  [...state.expenses].reverse().forEach((expense) => {
    const fragment = expenseTemplate.content.cloneNode(true);
    fragment.querySelector(".expense-description").textContent = expense.description;
    fragment.querySelector(".expense-meta").textContent = formatDate(expense.createdAt);
    fragment.querySelector(".expense-user").textContent = expense.paidBy;
    fragment.querySelector(".expense-amount").textContent = formatCurrency(expense.amount);
    expensesListElement.appendChild(fragment);
  });
}

function renderExpenseSummary() {
  const totals = getExpenseTotals();
  const half = totals.total / 2;
  const santiNet = totals.SANTI - half;
  const joaquinNet = totals.JOAQUIN - half;

  spentSantiElement.textContent = formatCurrency(totals.SANTI);
  spentJoaquinElement.textContent = formatCurrency(totals.JOAQUIN);

  if (totals.total === 0) {
    expenseBalanceSummaryElement.textContent = "Todavia no hay gastos cargados.";
    return;
  }

  if (Math.abs(santiNet) < 0.01 && Math.abs(joaquinNet) < 0.01) {
    expenseBalanceSummaryElement.textContent = "Van parejos: ninguno le debe al otro.";
    return;
  }

  if (santiNet > 0) {
    expenseBalanceSummaryElement.textContent = `JOAQUIN le debe ${formatCurrency(santiNet)} a SANTI para quedar equilibrados.`;
    return;
  }

  expenseBalanceSummaryElement.textContent = `SANTI le debe ${formatCurrency(joaquinNet)} a JOAQUIN para quedar equilibrados.`;
}

function renderShoppingPreview() {
  const chosenRecipes = state.history.map((entry) => getRecipeById(entry.recipeId)).filter(Boolean);
  if (chosenRecipes.length === 0) {
    shoppingPreviewElement.textContent = "Cuando empecemos esta seccion, ya va a tener disponible el historial del menu y la lista de ingredientes.";
    return;
  }

  const ingredientCount = {};
  chosenRecipes.flatMap((recipe) => recipe.ingredients).forEach((ingredient) => {
    ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
  });

  const topIngredients = Object.entries(ingredientCount)
    .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0]))
    .slice(0, 3)
    .map(([ingredient, count]) => `${ingredient} (${count})`);

  shoppingPreviewElement.textContent = `Con el historial actual, los ingredientes que mas aparecen son: ${topIngredients.join(", ")}.`;
}

function render() {
  renderIdentity();
  renderMenuSummary();
  renderRecipes();
  renderHistory();
  renderIngredientSelect();
  renderSelectedIngredients();
  renderExpenses();
  renderExpenseSummary();
  renderShoppingPreview();
}

function initializeFirebaseSync() {
  if (!window.firebase || !window.menuSemanalFirebaseConfig) {
    setSyncStatus("Firebase no esta disponible. La pagina funciona solo en este dispositivo.", "warning");
    render();
    return;
  }

  try {
    const app = firebase.apps.length > 0 ? firebase.app() : firebase.initializeApp(window.menuSemanalFirebaseConfig);
    const database = firebase.database(app);
    menuRef = database.ref(MENU_REF_PATH);

    setSyncStatus("Sincronizando datos compartidos...");

    menuRef.on(
      "value",
      (snapshot) => {
        const remoteValue = snapshot.val();

        if (remoteValue) {
          state = sanitizeState(remoteValue);
          persistLocalState();
          isHydratedFromRemote = true;
          setSyncStatus("Datos sincronizados entre dispositivos.");
          render();
          return;
        }

        if (!isHydratedFromRemote) {
          isHydratedFromRemote = true;
          void persistState();
        }
      },
      () => {
        setSyncStatus("No se pudo leer Firebase. Se usa la copia local.", "warning");
        render();
      }
    );
  } catch (error) {
    setSyncStatus("Error al iniciar Firebase. La pagina queda solo local.", "error");
    render();
  }
}

identitySantiButton.addEventListener("click", () => setCurrentUser("SANTI"));
identityJoaquinButton.addEventListener("click", () => setCurrentUser("JOAQUIN"));
undoButton.addEventListener("click", undoLastSelection);
resetButton.addEventListener("click", resetState);
addRecipeForm.addEventListener("submit", addRecipe);
addExpenseForm.addEventListener("submit", addExpense);
addIngredientButton.addEventListener("click", addDraftIngredient);
clearIngredientsButton.addEventListener("click", clearDraftIngredients);

render();
initializeFirebaseSync();
