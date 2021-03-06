import {Component, OnInit} from '@angular/core';
import {PipelineVO} from '../model/pipeline';
import {JsonEditorOptions} from '../json-editor/json-editor.component';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {PipelineService} from '../pipeline.service';
import {LogService} from '../log.service';

@Component({
  selector: 'app-pipeline-detail',
  templateUrl: './pipeline-detail.component.html',
  styleUrls: ['./pipeline-detail.component.css']
})
export class PipelineDetailComponent implements OnInit {
  pipeline: PipelineVO;
  editorOptions: JsonEditorOptions;
  viewOptions: JsonEditorOptions;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private pipelineService: PipelineService,
              private logger: LogService) {
    this.editorOptions = new JsonEditorOptions();
    this.viewOptions = new JsonEditorOptions();
  }

  ngOnInit() {
    this.editorOptions.modes = ['code', 'tree'];
    this.viewOptions.mode = 'view';
    this.getPipeline();
  }

  onSubmit() {
    this.pipelineService.update(this.pipeline).subscribe(() => {
      this.getPipeline();
    });
  }

  getPipeline() {
    const name = this.route.snapshot.paramMap.get('name');
    this.pipelineService.get(name)
      .subscribe(p => {
        this.pipeline = p;
        this.logger.info(`loaded pipeline ${p.metadata.name}`);
      });
  }

  back() {
    this.location.back();
  }
}
