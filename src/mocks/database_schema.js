// users collection
usersCollectionSchme = {
  id: "id",
  email: "email",
  hash: "hash",
  created_at: "created_at",
  updated_at: "updated_at",
};

// proposal submission schema
userProposalSchema = {
  user_id: "user_id",
  gallery_name: "gallery_name",
  gallery_address: "gallery_address",
  galley_postalcode: "galley_postalcode",
  summary: "summary",

  artists: ["asd", "asdas"],

  created_at: "created_at",
  updated_at: "updated_at",
};

// transaction schema
userTransactionsSchema = {
  user_id: "user_id",
  ext_transaction_id: "ext_transaction_id",
  total: "total",
  created_at: "created_at",
  updated_at: "updated_at",
};
