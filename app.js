let image = new Image();
image.src = 'pics/гот.1.1.png';
canvas_width = image.width;
canvas_height = image.height;
let jsonfront = 0;
let jsonback = 0;
let jsonleft = 0;
let jsonright = 0;
let previouslychecked = 1;



const initCanvas = (id) => {
    return new fabric.Canvas(id, {
        width: 661,
        height: 536,
    })
}

const setBackground = (url, canvas) => {
    fabric.Image.fromURL(url, (img) => {
        canvas.backgroundImage = img;
        canvas.renderAll();
})
};

const save_canvas = (canvas, json) => {
    json = JSON.stringify(canvas);

}

const load_json = (canvas, json) => {
    canvas.clear();
    canvas.loadFromJSON(json);

}



const canvas = initCanvas('fabric');
setBackground('pics/гот.1.1.png', canvas);

const imgAdded_pic = (e) => {
    const inputElem =  document.getElementById('upload_pic');
    const file = inputElem.files[0];
    file.id = 1;

    reader.readAsDataURL(file);

}

const imgAdded_nash = (e) => {
    const inputElem =  document.getElementById('upload_nash');
    const file = inputElem.files[0];
    file.id = 2;

    reader.readAsDataURL(file);

}

function saving_canvas(previouslychecked, canvas){
    if (previouslychecked == 1) {
        jsonfront = JSON.stringify(canvas);
    }

    else if (previouslychecked == 2) {
        jsonback = JSON.stringify(canvas);
    }

    else if (previouslychecked == 3) {
        jsonleft = JSON.stringify(canvas);
    }

    else if (previouslychecked == 4) {
        jsonright = JSON.stringify(canvas);
    }

}



const load_back = (canvas) => {
    saving_canvas(previouslychecked, canvas);
    if(jsonback !== 0){
        load_json(canvas, jsonback);
        canvas.clear();
        canvas.loadFromJSON(jsonback);
    }
    else {
        canvas.clear();
        setBackground('pics/гот.1.3.jpg', canvas);
    }
    canvas.requestRenderAll();
    previouslychecked = 2;
}

const load_front = (canvas) => {
    saving_canvas(previouslychecked, canvas);
    if(jsonfront !== 0){
        load_json(canvas, jsonfront);
        canvas.clear();
        canvas.loadFromJSON(jsonfront);
    }
    else {
        canvas.clear();
        setBackground('pics/гот.1.1.png', canvas)
    }
    canvas.requestRenderAll();
    previouslychecked = 1;
}

const load_left = (canvas) => {
    saving_canvas(previouslychecked, canvas);
    if(jsonleft !== 0){
        load_json(canvas, jsonleft);
        canvas.clear();
        canvas.loadFromJSON(jsonleft);
    }
    else {
        canvas.clear();
        setBackground('./pics/1.2.гот.jpg', canvas)
    }
    canvas.requestRenderAll();
    previouslychecked = 3
}

const load_right = (canvas) => {
    saving_canvas(previouslychecked, canvas);
  if(jsonright !== 0){
    load_json(canvas, jsonright);
    canvas.clear();
    canvas.loadFromJSON(jsonright);
  }
  else {
    canvas.clear();
    setBackground('./pics/гот.1.4.jpg', canvas);
  }
    canvas.requestRenderAll();
    previouslychecked = 4;
}



function convertToImage() {
    canvas.deactivateAll().renderAll();
    window.open(canvas.toDataURL('png'));
}


const inputFile_pic =  document.getElementById('upload_pic');
inputFile_pic.addEventListener('change', imgAdded_pic);

const inputFile_nash =  document.getElementById('upload_nash');
inputFile_nash.addEventListener('change', imgAdded_nash);

const reader = new FileReader();

reader.addEventListener("load", () => {
    fabric.Image.fromURL(reader.result, img => {
        canvas.add(img);
        canvas.requestRenderAll();
    })
})

const clear_all = (canvas) => {
    if (confirm('Вы уверены, что хотите удалить дизайн?')) {
        canvas.getObjects().forEach((o) => {
            if (o !== canvas.backgroundImage) {
                canvas.remove(o);
                canvas.requestRenderAll();
            }
        })
    }
}

const delete_object = (canvas) => {
    let activeObject = canvas.getActiveObject();
    if (activeObject){
        if (confirm('Вы уверены, что хотите удалить объект?')) {
            canvas.remove(activeObject);
            canvas.requestRenderAll();
        }
}}

const upload_gold = (canvas) => {
    fabric.Image.fromURL('pics/1.2.золото.jpg', img => {
        img.scaleToWidth(15);
        img.scaleToHeight(15);
        img.hasControls = false;
        img.id = 3;
        canvas.add(img);
        canvas.requestRenderAll();
    })

}

const upload_silver= (canvas) => {
    fabric.Image.fromURL('pics/bronz1.jpg', img => {
        img.scaleToWidth(15);
        img.scaleToHeight(15);
        img.hasControls = false;
        img.id = 4;
        canvas.add(img);
        canvas.requestRenderAll();
    })

}

const upload_white = (canvas) => {
    fabric.Image.fromURL('pics/1.2.белаая.jpg', img => {
        img.scaleToWidth(15);
        img.scaleToHeight(15);
        img.hasControls = false;
        img.id = 5;
        canvas.add(img);
        canvas.requestRenderAll();
    })

}

const upload_white_gold = (canvas) => {
    fabric.Image.fromURL('pics/1.2.белоезолото.jpg', img => {
        img.scaleToWidth(15);
        img.scaleToHeight(15);
        img.hasControls = false;
        img.id = 6;
        canvas.add(img);
        canvas.requestRenderAll();
    })

}

const upload_bronz = (canvas) => {
    fabric.Image.fromURL('pics/1.2.бронзагот.jpg', img => {
        img.scaleToWidth(15);
        img.scaleToHeight(15);
        img.hasControls = false;
        img.id = 7;
        canvas.add(img);
        canvas.requestRenderAll();
    })

}

// Button accordion
var panelItem = document.querySelectorAll('.btn--xl'),
  bodyItem = document.querySelectorAll('.obj-item');
panelItem.__proto__.forEach = [].__proto__.forEach;

var activePanel;
panelItem.forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    this.classList.add('active');
    this.nextElementSibling.classList.add('active');
    if (activePanel) {
      activePanel.classList.remove('active');
      activePanel.nextElementSibling.classList.remove('active');
    }
    activePanel = (activePanel === this) ? 0 : this;
  });
});

