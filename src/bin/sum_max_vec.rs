use std::collections::HashMap;

/*
Esta funcion creará los sub_array de longitudes variables
*/
fn sub_arrays(v: Vec<i32>) {

    let v_len = v.len()-1;
    let mut v_total: Vec<Vec<i32>> = vec!();
    //el vector de va a iterar tantas veces como sea la langitud del vector ingresado

    // hashMap para almacernar los subarray
    let mut test_hashmap: HashMap::<i32, Vec<Vec<i32>>> = HashMap::new();
    for mut j in 0..v_len {
        let mut  aux_v: Vec<i32> = vec!();
        let mut count: i32 = (v_len - j) as i32;
        // se inserta llave, valor: 0: []
        test_hashmap.insert(j as i32 , vec!());
        

        loop {
            aux_v = vec!();
            // println!("elementos del array por cada elemento del hashmap {}", count );
            //ahora hay que obtener los subarrays
            
            // if j >= count as usize {
            //     break;
            // }
            // println!("coutn {} - j {} = {}", count, j, count as usize - j);
            // este indice tiene que moverse de un en uno
            aux_v.push(v[j]);
            println!("aux_v {:?}", aux_v);

            
            v_total.push(aux_v);
            

            count -=1;
            if count < 0 {
                break;
            }
            j +=1;
        }

        // v_total.push(aux_v); 
        println!("v_total {:?}", v_total);
        test_hashmap.insert(0, v_total.clone());
        // if let Some(arr) =  test_hashmap.get_mut(&(j as i32)){
        //     arr.push(v_total);
        //     //println!("{:?}", arr);
        // }
        // test_hashmap.insert(j as i32 , v_total.clone());
        println!("tamaño del hashmap {}", j);
    }

    println!("test_hashmap {:?}", test_hashmap);
    println!("v_total {:?}", v_total);

}

fn other(nums: Vec<i32>) {
    
    // let nums = vec![2, -4, 3, 5, -1, 2, -6, 4];

    let mut max_sum = i32::MIN;
    let mut best_subarray = Vec::new();

    for size in 1..=nums.len() {
        for start in 0..=nums.len() - size {
            // println!("start..start {:?}", start);
            let subarray = &nums[start..start + size];
            // println!("subarray {:?}", subarray);
            let sum: i32 = subarray.iter().sum();

            if sum > max_sum {
                max_sum = sum;
                best_subarray = subarray.to_vec();
            }
        }
    }

    println!("Subarray con la suma máxima: {:?}", best_subarray);
    println!("Suma máxima: {}", max_sum);
}


fn main() {

    let array_input: Vec<i32> = vec!(5,4,3,2,1);
    
    println!("array_input {:?}", array_input[2]);
    // sub_arrays(array_input);
    other(array_input);
    other([-2, 1, -3, 4, -1, 2, 1, -5, 4].to_vec())
}