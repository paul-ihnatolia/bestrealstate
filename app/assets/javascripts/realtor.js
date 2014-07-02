$(document).on('click', '#add-testimonials', add_testimonials);
$(document).on('click', '#add-edit-testimonials', add_edit_testimonials);
$(document).on('click', '.testimonial_item .delete', delete_testimonial);
$(document).on('click', '.testimonial_edit_item .delete-edit', delete_edit_testimonial);
$(document).on('click', '.testimonial_item .edit', edit_testimonial);
$(document).on('click', '.testimonial_edit_item .edit-edit', edit_edit_testimonial);
$(document).on('click', '.testimonial_item .cancel', cancel_testimonial);
$(document).on('click', '.testimonial_edit_item .cancel-edit', cancel_edit_testimonial);
$(document).on('click', '.testimonial_item .save', save_testimonial);
$(document).on('click', '.testimonial_edit_item .save-edit', save_edit_testimonial);
$(document).on('click', '.show_user_profile', show_user_profile);



function show_user_profile(){
    var id = $(this).attr('data-realtor_id');
    window.location = "/admin/realtors/" + id;
//    $.ajax({
//        url: "/admin/realtors/" + id,
//        type: 'GET',
//        success: function(data){
//            console.log(data)
//        },
//        error: function(data){
//            console.log('ERROR')
//        }
//    })

}

function delete_testimonial(){
    console.log('delete')
    var id = $(this).attr('data-id');
    var form_el = $('.form-testimonials[data-id="'+id+'"]');
    $(this).parent().remove();
    form_el.remove();
    delete $(this).parent();
    delete form_el;

    return false;
}
function delete_edit_testimonial(){
    var sure = confirm('Are you sure?');
    if(sure){
        var id = $(this).attr('data-id');
        $(this).parent().remove();
        delete $(this).parent();

        $.ajax({
            url: "/realtors/delete_testimonial",
            type: 'POST',
            data: {testimonial_id: id},
            success: function(data){
            },
            error: function(data){
                console.log('ERROR')
            }
        })
    }
    return false;
}
function save_testimonial(){
    console.log('save')
    var el = $(this).parent();
    var id = $(this).attr('data-id');
    var form_el = $('.form-testimonials[data-id="'+id+'"].text-form');
    var form_input_el = $('.form-testimonials[data-id="'+id+'"].name-form');
    $('.show_testtimonial' + id +' p.text').text($('.edit_testtimonial' + id + ' textarea').val());
    $('.show_testtimonial' + id +' p.name').text($('.edit_testtimonial' + id + ' input').val());
    form_el.val($('.edit_testtimonial' + id + ' textarea').val());
    form_input_el.val($('.edit_testtimonial' + id + ' input').val());
    $('.edit_testtimonial' + id).hide();
    $('.show_testtimonial' + id).show();
    el.find('a.edit').show();
    el.find('a.delete').show();
    el.find('a.save').hide();
    el.find('a.cancel').hide();

    return false;
}
function save_edit_testimonial(){
    console.log('save')
    var el = $(this).parent();
    var id = $(this).attr('data-id');
    var text = $('.edit_edit_testtimonial' + id + ' textarea').val()
    var name = $('.edit_edit_testtimonial' + id + ' input').val()
    $.ajax({
        url: "/realtors/edit_testimonial",
        type: 'POST',
        data: {testimonial_id: id, text: text, name: name},
        success: function(data){
        },
        error: function(data){
            console.log('ERROR')
        }
    })

    $('.show_edit_testtimonial' + id +' p.text').text($('.edit_edit_testtimonial' + id + ' textarea').val());
    $('.show_edit_testtimonial' + id +' p.name').text($('.edit_edit_testtimonial' + id + ' input').val());

    $('.edit_edit_testtimonial' + id).hide();
    $('.show_edit_testtimonial' + id).show();
    el.find('a.edit-edit').show();
    el.find('a.delete-edit').show();
    el.find('a.save-edit').hide();
    el.find('a.cancel-edit').hide();

    return false;
}
function edit_testimonial(){
    console.log('edit')
    var id = $(this).attr('data-id');
    var el = $(this).parent();
    $('.edit_testtimonial' + id).show();
    $('.edit_testtimonial' + id + ' textarea').show();
    $('.edit_testtimonial' + id + ' input').show();
    $('.show_testtimonial' + id).hide();
    el.find('a.edit').hide();
    el.find('a.delete').hide();
    el.find('a.save').show();
    el.find('a.cancel').show();
    return false;
}
function edit_edit_testimonial(){
    console.log('edit')
    var id = $(this).attr('data-id');
    var el = $(this).parent();
    $('.edit_edit_testtimonial' + id).show();
    $('.edit_edit_testtimonial' + id + ' textarea').show();
    $('.edit_edit_testtimonial' + id + ' input').show();
    $('.show_edit_testtimonial' + id).hide();
    el.find('a.edit-edit').hide();
    el.find('a.delete-edit').hide();
    el.find('a.save-edit').show();
    el.find('a.cancel-edit').show();
    return false;
}
function cancel_testimonial(){
    console.log('cancel')
    var el = $(this).parent();
    var id = $(this).attr('data-id');
    $('.edit_testtimonial' + id + ' textarea').val( $.trim($('.show_testtimonial' + id +' p.text').text()) );
    $('.edit_testtimonial' + id + ' input').val( $.trim($('.show_testtimonial' + id +' p.name').text()) );
    $('.edit_testtimonial' + id).hide();
    $('.show_testtimonial' + id).show();
    el.find('a.edit').show();
    el.find('a.delete').show();
    el.find('a.save').hide();
    el.find('a.cancel').hide();
    return false;
}
function cancel_edit_testimonial(){
    console.log('cancel')
    var el = $(this).parent();
    var id = $(this).attr('data-id');
    $('.edit_edit_testtimonial' + id + ' textarea').val( $.trim($('.show_edit_testtimonial' + id +' p').text()) );
    $('.edit_edit_testtimonial' + id).hide();
    $('.show_edit_testtimonial' + id).show();
    el.find('a.edit-edit').show();
    el.find('a.delete-edit').show();
    el.find('a.save-edit').hide();
    el.find('a.cancel-edit').hide();
    return false;
}
function add_testimonials(){
    var testimonial = $('#testimonial-input').val();
    var name = $('#testimonial-name-input').val();
    if(testimonial){
        var num = $('#new-realtor .form-testimonials').length + 1;

        console.log('add testimonials');
        var form_input = '<input  name="testimonials['+num+'][text]" type="hidden" value="'+testimonial+'" data-id="'+num+'" class="form-testimonials text-form">'
        var form_input_name = '<input name="testimonials['+num+'][name]" type="hidden" value="'+name+'" data-id="'+num+'" class=" name-form form-testimonials">'

        var input = '<div class="testimonial_item"> \
                       <div class="show_testtimonial'+num+'"> \
                         <b>Testimonion:</b>\
                         <p class="text">'+testimonial+'</p> \
                         <b>Name: </b>\
                         <p class="name">'+name+'</p> \
                      </div>\
                       <div class="edit_testtimonial'+num+'"> \
                         <textarea name="testimonial['+num+']" class="testimonials" data-id="'+num+'" rows="3">'+testimonial+'</textarea> \
                         <input name="testimonial['+num+']" class="testimonials" value="'+name+'" data-id="'+num+'"> \
                      </div>\
                      <div class="action-btns">\
                      <a href="#" class="btn-sm btn-warning edit" data-id="'+num+'">Edit </a>\
                      <a href="#" class="btn-sm btn-danger delete" data-id="'+num+'">Delete </a>\
                      <a href="#" class="btn-sm btn-danger cancel" data-id="'+num+'">Cancel </a>\
                      <a href="#" class="btn-sm btn-success save" data-id="'+num+'">Save </a>\
                      </div>\
                    </div>'
        $('#new-realtor').append(form_input);
        $('#new-realtor').append(form_input_name);
        $('.testimonials-container').prepend(input);
        $('#testimonial-input').val('');
        $('#testimonial-name-input').val('');
    }
    return false;

}

function add_edit_testimonials(){
    var testimonial = $('#testimonial-edit-input').val();
    var name = $('#testimonial-name-input').val();
    if(testimonial){
        var realtor = $(this).attr('data-realtor');
        $.ajax({
            url: "/realtors/add_testimonial",
            type: 'POST',
            data: {realtor_id: realtor, text: testimonial, name: name},
            success: function(data){
                console.log('OK')
                $('.testimonials-container-edit').prepend(data);
                $('#testimonial-edit-input').val('');
                $('#testimonial-name-input').val('');
            },
            error: function(data){
                console.log('ERROR')
            }

        })
    }
    return false;
}
$(document).on('submit','#search-form', search_by_param)

function search_by_param(){
  var filter = $('#select-search').val();
  var param = $(this).find('input').val();
    console.log(param)
    console.log(filter)
  $.ajax({
      url: "/realtors/search_by_params",
      type: 'POST',
      data: {filter: filter, param: param},
      success: function(data){
          console.log('OK')
          $('#info .container.results').html(data)
      },
      error: function(data){
          console.log('ERROR')
      }

  })
  return false;
}
