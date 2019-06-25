var json = [{
    "name": "user1",
    "id": "zankj"
}, {
    "name": "user2",
    "id": "ankit"
}, {
    "name": "user3",
    "id": "bakals"
}];

json.sort(function(a, b){
    return a.id > b.id;
});
console.log(json)