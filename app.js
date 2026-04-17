const STORAGE_KEY = "menu-semanal-rotation-v5";
const CURRENT_USER_KEY = "menu-semanal-current-user";
const MENU_REF_PATH = "menuSemanal/sharedState";
const BLOCK_TURNS = 4;
const USERS = ["SANTI", "JOAQUIN"];

const ingredientCatalog = [
  { key: "costeletas", label: "Costeletas", baseLabel: "100% = 4 kg aprox", defaultPercent: 5, usageLabel: "Uso normal: 2 costeletas = 5%" },
  { key: "papas", label: "Papas", baseLabel: "100% = 2 kg aprox / 8 medianas", defaultPercent: 25, usageLabel: "Uso normal: 2 papas = 25%" },
  { key: "cebolla", label: "Cebolla", baseLabel: "100% = 2 kg aprox / 14 cebollas", defaultPercent: 7, usageLabel: "Uso normal: 1 cebolla = 7%" },
  { key: "huevo", label: "Huevos", baseLabel: "100% = 60 huevos", defaultPercent: 5, usageLabel: "Uso normal: 3 huevos = 5%" },
  { key: "tomate", label: "Tomate", baseLabel: "100% = 1 kg aprox / 7 tomates", defaultPercent: 14, usageLabel: "Uso normal: 1 tomate = 14%" },
  { key: "lechuga", label: "Lechuga", baseLabel: "100% = 1 unidad", defaultPercent: 50, usageLabel: "Uso normal: media lechuga = 50%" },
  { key: "pechuga", label: "Pechuga", baseLabel: "100% = 3 kg", defaultPercent: 13, usageLabel: "Uso normal: 400 g total = 13%" },
  { key: "queso", label: "Queso", baseLabel: "100% = 2 kg", defaultPercent: 10, usageLabel: "Uso normal: 200 g = 10%" },
  { key: "arroz", label: "Arroz", baseLabel: "100% = 4 kg", defaultPercent: 5, usageLabel: "Uso normal: 200 g = 5%" },
  { key: "lentejas", label: "Lentejas", baseLabel: "100% = 4 latas", defaultPercent: 25, usageLabel: "Uso normal: 1 lata = 25%" },
  { key: "arvejas", label: "Arvejas", baseLabel: "100% = 4 latas", defaultPercent: 25, usageLabel: "Uso normal: 1 lata = 25%" },
  { key: "jardinera", label: "Jardinera", baseLabel: "100% = 4 latas", defaultPercent: 25, usageLabel: "Uso normal: 1 lata = 25%" },
  { key: "choclo", label: "Choclo", baseLabel: "100% = 2 latas", defaultPercent: 25, usageLabel: "Uso normal: media lata = 25%" },
  { key: "picadillo", label: "Picadillo", baseLabel: "100% = 4 latas", defaultPercent: 25, usageLabel: "Uso normal: 1 lata = 25%" },
  { key: "carne ternera", label: "Carne ternera", baseLabel: "100% = 2 kg", defaultPercent: 15, usageLabel: "Uso normal: 300 g total = 15%" }
];

const ingredientAliasMap = {
  "huevo duro": "huevo",
  "huevo frito": "huevo",
  huevo: "huevo",
  pollo: "pechuga",
  carne: "carne ternera"
};

const recipeConsumptionById = {
  "pechuga-lentejas-huevo-cebolla": { pechuga: 13, lentejas: 25, huevo: 4, cebolla: 4 },
  "arroz-pollo-caldo-queso-cebolla": { arroz: 5, pechuga: 13, queso: 10, cebolla: 4 },
  "tomate-relleno-picadillo-huevo-ajo-cebolla": { tomate: 14, picadillo: 25, huevo: 4, cebolla: 4 },
  "costeletas-ensalada-cebolla": { costeletas: 5, tomate: 14, lechuga: 50, cebolla: 11 },
  "tortilla-arvejas-costeleta": { arvejas: 25, huevo: 5, queso: 10, tomate: 14, costeletas: 5 },
  "arroz-huevo-frito-queso-caldo": { arroz: 5, huevo: 4, queso: 10 },
  "zapallito-revuelto-cebolla": { queso: 8, huevo: 4, cebolla: 11 },
  "jardinera-fria-huevos-carne": { jardinera: 25, huevo: 7, pechuga: 7 },
  "pechuga-rebozada-arroz": { pechuga: 13, arroz: 5 },
  "ensalada-lentejas-carne": { lentejas: 25, tomate: 14, cebolla: 7, huevo: 7, "carne ternera": 15 },
  "tomate-relleno-ajo": { tomate: 14, picadillo: 25, huevo: 4 },
  "omelette-fiambre-queso": { huevo: 4, queso: 8, tomate: 14, lechuga: 50 },
  "bife-papas-huevo-frito": { costeletas: 5, papas: 25, huevo: 4 },
  "arroz-tiritas-costeleta": { arroz: 5, queso: 8, costeletas: 5 },
  "tortilla-arvejas-pechuga": { arvejas: 25, huevo: 5, queso: 8, pechuga: 13 },
  "zapallito-revuelto-clasico": { queso: 8, huevo: 4, cebolla: 11 },
  "jardinera-pechuga": { jardinera: 25, huevo: 4, pechuga: 13 },
  "arroz-choclo-costeleta": { arroz: 5, choclo: 25, queso: 8, costeletas: 5 },
  "costeletas-ensalada-fresca": { costeletas: 5, tomate: 14, lechuga: 50, cebolla: 7 },
  "tortilla-arvejas-salsa-carne": { arvejas: 25, huevo: 5, "carne ternera": 15, tomate: 8 },
  "papas-cebollas-air-fryer": { papas: 25, cebolla: 11, huevo: 4 },
  "ensalada-lentejas-huevo-duro": { lentejas: 25, tomate: 14, cebolla: 7, huevo: 4 },
  "omelette-fiambre-queso-ensalada": { huevo: 4, queso: 8, tomate: 14, lechuga: 50 }
};

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

const inventoryDefaults = Object.fromEntries(ingredientCatalog.map((item) => [item.key, 100]));
const baseIngredientPool = Array.from(new Set(builtInRecipes.flatMap((recipe) => recipe.ingredients).map(normalizeIngredient).filter(Boolean))).sort((left, right) => left.localeCompare(right));

const defaultState = {
  history: [],
  customRecipes: [],
  pantryIngredients: baseIngredientPool,
  expenses: builtInExpenses,
  inventory: inventoryDefaults
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
const lowStockCountElement = document.getElementById("low-stock-count");
const averageStockElement = document.getElementById("average-stock");
const inventoryListElement = document.getElementById("inventory-list");
const refillAllButton = document.getElementById("refill-all-button");
const lowStockCardElement = document.getElementById("low-stock-card");
const lowStockPanelElement = document.getElementById("low-stock-panel");
const lowStockItemsElement = document.getElementById("low-stock-items");
const closeLowStockPanelButton = document.getElementById("close-low-stock-panel");

let state = loadCachedState();
let currentUser = loadCurrentUser();
let recipeDraftIngredients = [];
let menuRef = null;
let isHydratedFromRemote = false;
let inventoryReorderPausedUntil = 0;
let inventoryReorderTimer = null;

function normalizeIngredient(value) {
  return value.trim().toLowerCase();
}

function normalizeTrackedIngredient(value) {
  const normalized = normalizeIngredient(value);
  return ingredientAliasMap[normalized] || normalized;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 2 }).format(value || 0);
}

function formatDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString("es-AR");
}

function prettifyIngredient(value) {
  return value.split(" ").filter(Boolean).map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1)).join(" ");
}

function clampPercent(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
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
  const ingredients = Array.isArray(recipe.ingredients) ? Array.from(new Set(recipe.ingredients.map(normalizeIngredient).filter(Boolean))) : [];
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
  return Array.from(new Set(ingredientLists.flat().map((ingredient) => normalizeIngredient(String(ingredient))).filter(Boolean))).sort((left, right) => left.localeCompare(right));
}

function mergeExpenses(...expenseLists) {
  const expenseMap = new Map();
  expenseLists.flat().filter(Boolean).forEach((expense) => expenseMap.set(expense.id, expense));
  return [...expenseMap.values()].sort((left, right) => left.createdAt.localeCompare(right.createdAt));
}

function sanitizeInventory(rawInventory) {
  const inventory = {};
  ingredientCatalog.forEach((ingredient) => {
    inventory[ingredient.key] = clampPercent(Number(rawInventory?.[ingredient.key] ?? 100));
  });
  return inventory;
}

function sanitizeState(rawState) {
  const customRecipes = Array.isArray(rawState?.customRecipes) ? rawState.customRecipes.map(sanitizeRecipe).filter(Boolean) : [];
  const expenses = mergeExpenses(builtInExpenses, Array.isArray(rawState?.expenses) ? rawState.expenses.map(sanitizeExpense).filter(Boolean) : []);

  return {
    history: Array.isArray(rawState?.history)
      ? rawState.history.filter((entry) => entry && typeof entry.recipeId === "string").map((entry) => ({
          recipeId: entry.recipeId,
          selectedAt: typeof entry.selectedAt === "string" ? entry.selectedAt : new Date().toISOString()
        }))
      : [],
    customRecipes,
    pantryIngredients: mergeIngredientPools(baseIngredientPool, Array.isArray(rawState?.pantryIngredients) ? rawState.pantryIngredients : [], customRecipes.flatMap((recipe) => recipe.ingredients)),
    expenses,
    inventory: sanitizeInventory(rawState?.inventory)
  };
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

function getRecipeConsumption(recipe) {
  if (recipeConsumptionById[recipe.id]) {
    return recipeConsumptionById[recipe.id];
  }

  return recipe.ingredients.reduce((accumulator, ingredient) => {
    const key = normalizeTrackedIngredient(ingredient);
    const catalogEntry = ingredientCatalog.find((item) => item.key === key);
    if (catalogEntry) {
      accumulator[key] = Math.max(accumulator[key] || 0, catalogEntry.defaultPercent);
    }
    return accumulator;
  }, {});
}

function applyRecipeConsumption(recipe) {
  const consumption = getRecipeConsumption(recipe);
  Object.entries(consumption).forEach(([ingredientKey, percent]) => {
    state.inventory[ingredientKey] = clampPercent((state.inventory[ingredientKey] ?? 100) - percent);
  });
}

function revertRecipeConsumption(recipe) {
  const consumption = getRecipeConsumption(recipe);
  Object.entries(consumption).forEach(([ingredientKey, percent]) => {
    state.inventory[ingredientKey] = clampPercent((state.inventory[ingredientKey] ?? 100) + percent);
  });
}

function selectRecipe(recipeId) {
  const recipe = getRecipeById(recipeId);
  if (!recipe) {
    return;
  }

  state.history.push({ recipeId, selectedAt: new Date().toISOString() });
  applyRecipeConsumption(recipe);
  render();
  void persistState();
}

function undoLastSelection() {
  if (state.history.length === 0) {
    return;
  }

  const lastEntry = state.history.pop();
  const recipe = getRecipeById(lastEntry.recipeId);
  if (recipe) {
    revertRecipeConsumption(recipe);
  }
  render();
  void persistState();
}

function resetState() {
  state.history = [];
  state.customRecipes = [];
  state.pantryIngredients = [...baseIngredientPool];
  state.expenses = [...builtInExpenses];
  state.inventory = { ...inventoryDefaults };
  recipeDraftIngredients = [];
  render();
  void persistState();
}

function scoreRecipe(recipe) {
  const recentIngredients = new Set(getHistoryIngredients(0).map(normalizeTrackedIngredient));
  const olderIngredients = new Set(getHistoryIngredients(1).map(normalizeTrackedIngredient));
  const reasons = [];
  let score = 0;
  const trackedIngredients = recipe.ingredients.map(normalizeTrackedIngredient);

  const recentOverlap = trackedIngredients.filter((ingredient) => recentIngredients.has(ingredient));
  if (recentOverlap.length > 0) {
    score += 180 + recentOverlap.length * 18;
    reasons.push(`Comparte con la ultima: ${recentOverlap.join(", ")}`);
  }

  const olderOverlap = trackedIngredients.filter((ingredient) => olderIngredients.has(ingredient));
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
  return buildRecipes().filter((recipe) => !blockedIds.has(recipe.id)).map((recipe) => ({ recipe, ...scoreRecipe(recipe) })).sort((left, right) => left.score - right.score || left.recipe.title.localeCompare(right.recipe.title));
}
function renderIdentity() {
  identitySantiButton.classList.toggle("active", currentUser === "SANTI");
  identityJoaquinButton.classList.toggle("active", currentUser === "JOAQUIN");
  currentUserLabelElement.textContent = currentUser ? `Este dispositivo esta usando la identidad ${currentUser}.` : "Todavia no elegiste usuario en este dispositivo.";
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

  lastMealElement.textContent = lastRecipe ? `${lastRecipe.title} (${formatDate(lastEntry.selectedAt)})` : "Todavia no hay historial.";
  prioritySummaryElement.textContent = visibleRecipes[0] ? `Hay ${visibleRecipes.length} comidas visibles y ${hiddenCount} ocultas por rotacion.` : "Todas las comidas quedaron ocultas temporalmente por las ultimas selecciones.";
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

  state.customRecipes.push({ id: createRecipeId(title), title, ingredients: [...recipeDraftIngredients] });
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

  state.expenses = mergeExpenses(state.expenses, [{ id: `expense-${Date.now()}`, amount, description, paidBy: currentUser, createdAt: new Date().toISOString() }]);
  addExpenseForm.reset();
  addExpenseFeedbackElement.textContent = `Gasto guardado para ${currentUser}.`;
  delete addExpenseFeedbackElement.dataset.tone;
  render();
  void persistState();
}

function getExpenseTotals() {
  return state.expenses.reduce((totals, expense) => {
    totals[expense.paidBy] += expense.amount;
    totals.total += expense.amount;
    return totals;
  }, { SANTI: 0, JOAQUIN: 0, total: 0 });
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
  } else if (Math.abs(santiNet) < 0.01 && Math.abs(joaquinNet) < 0.01) {
    expenseBalanceSummaryElement.textContent = "Van parejos: ninguno le debe al otro.";
  } else if (santiNet > 0) {
    expenseBalanceSummaryElement.textContent = `JOAQUIN le debe ${formatCurrency(santiNet)} a SANTI para quedar equilibrados.`;
  } else {
    expenseBalanceSummaryElement.textContent = `SANTI le debe ${formatCurrency(joaquinNet)} a JOAQUIN para quedar equilibrados.`;
  }
}
function scheduleInventoryReorder() {
  if (inventoryReorderTimer) {
    window.clearTimeout(inventoryReorderTimer);
  }

  const remainingMs = Math.max(0, inventoryReorderPausedUntil - Date.now());
  inventoryReorderTimer = window.setTimeout(() => {
    inventoryReorderTimer = null;
    renderInventory();
  }, remainingMs + 20);
}

function setInventoryLevel(key, value) {
  state.inventory[key] = clampPercent(value);
  inventoryReorderPausedUntil = Date.now() + 10000;
  renderInventory();
  renderShoppingSummary();
  scheduleInventoryReorder();
  void persistState();
}

function refillAllInventory() {
  state.inventory = { ...inventoryDefaults };
  inventoryReorderPausedUntil = Date.now() + 10000;
  renderInventory();
  renderShoppingSummary();
  scheduleInventoryReorder();
  void persistState();
}

function getInventoryEntriesForRender() {
  const entries = [...ingredientCatalog];
  if (Date.now() < inventoryReorderPausedUntil) {
    return entries;
  }

  return entries.sort((left, right) => {
    const leftValue = state.inventory[left.key] ?? 100;
    const rightValue = state.inventory[right.key] ?? 100;
    return leftValue - rightValue || left.label.localeCompare(right.label);
  });
}

function renderInventory() {
  const inventoryTemplate = document.getElementById("inventory-template");
  inventoryListElement.innerHTML = "";

  getInventoryEntriesForRender().forEach((ingredient) => {
    const fragment = inventoryTemplate.content.cloneNode(true);
    const currentPercent = state.inventory[ingredient.key] ?? 100;
    const item = fragment.querySelector(".inventory-item");
    const fill = fragment.querySelector(".inventory-fill");

    fragment.querySelector(".inventory-name").textContent = ingredient.label;
    fragment.querySelector(".inventory-base").textContent = ingredient.baseLabel;
    fragment.querySelector(".inventory-percent").textContent = `${currentPercent}%`;
    fragment.querySelector(".inventory-usage").textContent = ingredient.usageLabel;
    fill.style.width = `${currentPercent}%`;

    if (currentPercent <= 25) {
      item.dataset.level = "low";
    } else if (currentPercent <= 55) {
      item.dataset.level = "medium";
    } else {
      item.dataset.level = "high";
    }

    fragment.querySelectorAll(".mini-button").forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        if (action === "100") {
          setInventoryLevel(ingredient.key, 100);
          return;
        }
        setInventoryLevel(ingredient.key, currentPercent + Number(action));
      });
    });

    inventoryListElement.appendChild(fragment);
  });
}

function toggleLowStockPanel(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : lowStockPanelElement.hidden;
  lowStockPanelElement.hidden = !shouldOpen;
}

function renderLowStockPanel() {
  const lowItems = ingredientCatalog
    .map((ingredient) => ({
      label: ingredient.label,
      percent: state.inventory[ingredient.key] ?? 100
    }))
    .filter((ingredient) => ingredient.percent <= 25)
    .sort((left, right) => left.percent - right.percent || left.label.localeCompare(right.label));

  lowStockItemsElement.innerHTML = "";

  if (lowItems.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = "No hay ingredientes criticos por ahora.";
    lowStockItemsElement.appendChild(emptyState);
    return;
  }

  lowItems.forEach((ingredient) => {
    const row = document.createElement("div");
    row.className = "low-stock-row";
    row.innerHTML = `<span>${ingredient.label}</span><strong>${ingredient.percent}%</strong>`;
    lowStockItemsElement.appendChild(row);
  });
}

function renderShoppingSummary() {
  const values = ingredientCatalog.map((ingredient) => state.inventory[ingredient.key] ?? 100);
  const lowCount = values.filter((value) => value <= 25).length;
  const average = Math.round(values.reduce((accumulator, value) => accumulator + value, 0) / values.length);
  const lowItems = ingredientCatalog.filter((ingredient) => (state.inventory[ingredient.key] ?? 100) <= 25).map((ingredient) => ingredient.label);

  lowStockCountElement.textContent = String(lowCount);
  averageStockElement.textContent = `${average}%`;
  shoppingPreviewElement.textContent = lowItems.length > 0 ? `Conviene reponer pronto: ${lowItems.join(", ")}.` : "El stock se descuenta automaticamente cuando seleccionan comidas y despues se puede corregir a mano.";
  renderLowStockPanel();
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
  renderInventory();
  renderShoppingSummary();
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
refillAllButton.addEventListener("click", refillAllInventory);
lowStockCardElement.addEventListener("click", () => toggleLowStockPanel());
lowStockCardElement.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleLowStockPanel();
  }
});
closeLowStockPanelButton.addEventListener("click", () => toggleLowStockPanel(false));

render();
initializeFirebaseSync();
