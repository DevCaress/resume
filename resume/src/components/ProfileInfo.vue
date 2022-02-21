<template >
  <section>
    <div class="card">
      <div class="img-profile">
        <img class="img" src="@/assets/caress.jpg" alt="" />
      </div>
      <div class="info">
          <div class="edu">
              <h3>Education</h3>
              <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. In cum impedit inventore. Id velit voluptas qui repellendus. Dicta perspiciatis harum dignissimos possimus. Quod, nostrum voluptatibus nihil iusto corrupti dolores aperiam!
              </p>
          </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "ProfileInfo",
};
</script>

<style  scoped>

.img-profile{
    z-index: 1;
}

.card{
    background-color: var(--white);
    border-radius: var(--br);
    margin: auto;
    width: 60%;
}

.edu{
    background-color: var(--white);
    border-radius: var(--br);
    cursor: pointer;
    padding: 1rem;
}
.edu:hover{
    transform: translateY(-100px);
}

.edu:hover p{
    display: block;
    z-index: 2;

}

p{
    display: none;
    margin: 0;
}


</style>
    
