id: {
type: uuid,
primaryKey: true,
defaultValue: uuid,
},

creator: {
type: uuid,
references: {
model: "Users",
key: "id",
},
},

start_at: {
type: date,
},
end_at: {
type: date,
},
